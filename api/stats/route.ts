/**
 * Live GitHub Ecosystem Telemetry Endpoint — api/stats/route.ts
 * Fetches live user and repository metrics for @santoshkumarvvv from the GitHub REST API,
 * aggregates total public repos, total stars, and most recently updated repository metadata,
 * and caches responses at the Vercel Edge (s-maxage=300, stale-while-revalidate=600).
 */

const ALLOWED_ORIGINS = [
  'https://santoshkumarvvv.github.io',
  'https://vvv-portfolio.vercel.app'
];

function getCorsHeaders(request?: Request): Record<string, string> {
  const origin = request?.headers.get('origin') || '';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : ALLOWED_ORIGINS[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Vary': 'Origin',
    'Content-Type': 'application/json; charset=utf-8'
  };
}

export async function OPTIONS(request?: Request): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(request)
  });
}

export async function GET(request: Request): Promise<Response> {
  const headers: Record<string, string> = {
    ...getCorsHeaders(request),
    'Cache-Control': 's-maxage=300, stale-while-revalidate=600'
  };

  try {
    const ghHeaders: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'santoshkumarvvv-portfolio-telemetry'
    };

    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/santoshkumarvvv', { headers: ghHeaders }),
      fetch('https://api.github.com/users/santoshkumarvvv/repos?per_page=100', { headers: ghHeaders })
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return new Response(
        JSON.stringify({
          error: 'GitHub upstream unavailable',
          status: userRes.status || reposRes.status
        }),
        { status: 502, headers }
      );
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();
    const reposList = Array.isArray(reposData) ? reposData : [];

    const public_repos =
      typeof userData?.public_repos === 'number'
        ? userData.public_repos
        : reposList.length;

    const total_stars = reposList.reduce(
      (sum: number, repo: { stargazers_count?: number }) =>
        sum + (typeof repo?.stargazers_count === 'number' ? repo.stargazers_count : 0),
      0
    );

    let latest_repo_name = 'santoshkumarvvv';
    let latest_repo_date = new Date().toISOString();

    if (reposList.length > 0) {
      const sorted = [...reposList].sort((a, b) => {
        const dateA = a?.updated_at ? new Date(a.updated_at).getTime() : 0;
        const dateB = b?.updated_at ? new Date(b.updated_at).getTime() : 0;
        return dateB - dateA;
      });
      latest_repo_name = sorted[0]?.name || latest_repo_name;
      latest_repo_date = sorted[0]?.updated_at || latest_repo_date;
    }

    return new Response(
      JSON.stringify({
        public_repos,
        total_stars,
        latest_repo_name,
        latest_repo_date,
        fetched_at: new Date().toISOString()
      }),
      {
        status: 200,
        headers
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch live GitHub telemetry',
        message: err instanceof Error ? err.message : 'Unknown error'
      }),
      { status: 500, headers }
    );
  }
}
