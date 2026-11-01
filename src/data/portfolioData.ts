export interface ProjectCaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'search-systems' | 'cloud-cicd' | 'cross-platform';
  categoryLabel: string;
  year: string;
  repoName: string;
  repoUrl: string;
  liveUrl: string;
  bentoSpan: 'wide' | 'compact';
  summary: string;
  challenge: string;
  architectureSummary: string;
  stack: string[];
  metrics: {
    label: string;
    value: string;
    delta: string;
  }[];
  codeSample: {
    filename: string;
    language: string;
    code: string;
  };
}

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'search-hub-engine',
    index: '01',
    title: 'Search Hub Universal Query Engine',
    subtitle: 'Federated multi-index search & instant command routing in TypeScript and Next.js',
    category: 'search-systems',
    categoryLabel: 'Search Systems',
    year: '2026',
    repoName: 'santoshkumarvvv/search-hub-',
    repoUrl: 'https://github.com/santoshkumarvvv/search-hub-',
    liveUrl: 'https://github.com/santoshkumarvvv/search-hub-',
    bentoSpan: 'wide',
    summary:
      'Federated search application designed to aggregate developer documentation, code indices, and web endpoints under a low-latency in-memory BM25 keyboard-first interface.',
    challenge:
      'Conventional multi-source search tools suffer from cascading network waterfalls and sluggish DOM re-renders when ranking results across multiple indices.',
    architectureSummary:
      'Built on an asynchronous token-bucket debouncer with in-memory inverted indices, Okapi BM25 lexical scoring, and virtualized viewport rendering.',
    stack: ['TypeScript', 'Next.js 15', 'BM25 Engine', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Ranking Engine', value: 'In-Memory BM25', delta: 'Lexical & typo-tolerant scoring' },
      { label: 'Index Architecture', value: 'Inverted Index', delta: 'Client & serverless edge routing' },
      { label: 'UI Responsiveness', value: 'Zero-CLS Layout', delta: 'Debounced token-bucket input' },
    ],
    codeSample: {
      filename: 'lib/search-engine/federatedRanker.ts',
      language: 'typescript',
      code: `export interface SearchHit {
  id: string;
  title: string;
  source: 'docs' | 'repos' | 'packages';
  lexicalScore: number;
  recencyWeight: number;
}

export function rankFederatedResults(
  hits: ReadonlyArray<SearchHit>,
  queryTokens: ReadonlyArray<string>
): SearchHit[] {
  const tokenCount = Math.max(queryTokens.length, 1);
  return [...hits].sort((a, b) => {
    const scoreA = a.lexicalScore * 0.78 + a.recencyWeight * (0.22 / tokenCount);
    const scoreB = b.lexicalScore * 0.78 + b.recencyWeight * (0.22 / tokenCount);
    return scoreB - scoreA;
  });
}`,
    },
  },
  {
    id: 'dev-showcase-architecture',
    index: '02',
    title: 'Dev Showcase & Automated CI/CD Blueprint',
    subtitle: 'Clean modular architecture with GitHub Actions verification pipelines',
    category: 'cloud-cicd',
    categoryLabel: 'Cloud & CI/CD',
    year: '2026',
    repoName: 'santoshkumarvvv/dev-showcase',
    repoUrl: 'https://github.com/santoshkumarvvv/dev-showcase',
    liveUrl: 'https://github.com/santoshkumarvvv/dev-showcase',
    bentoSpan: 'compact',
    summary:
      'Application blueprint demonstrating separation of domain logic, deterministic unit test suites, static security policy enforcement, and automated release workflows.',
    challenge:
      'Fast-moving projects often accumulate brittle build scripts and inconsistent linting gates that slow down pull request verification.',
    architectureSummary:
      'Implements a layered domain-driven directory structure coupled with GitHub Actions workflows for static analysis and artifact verification.',
    stack: ['Dart', 'Flutter', 'Riverpod', 'Clean Architecture', 'CI/CD Actions'],
    metrics: [
      { label: 'CI Workflow', value: 'GitHub Actions', delta: 'Cached dependency runners' },
      { label: 'Verification', value: 'AST & Static Lint', delta: 'Deterministic build checks' },
      { label: 'Release Pattern', value: 'Automated Gates', delta: 'Branch-protected workflows' },
    ],
    codeSample: {
      filename: '.github/workflows/ci-pipeline.yml',
      language: 'yaml',
      code: `name: Production Verification Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint && npm run build`,
    },
  },
  {
    id: 'search-hub-cloud-cluster',
    index: '03',
    title: 'Search Hub Cloud & Render Deployment Node',
    subtitle: 'Declarative deployment configuration across Vercel and Render',
    category: 'search-systems',
    categoryLabel: 'Search Systems',
    year: '2026',
    repoName: 'santoshkumarvvv/search-hub-app',
    repoUrl: 'https://github.com/santoshkumarvvv/search-hub-app',
    liveUrl: 'https://github.com/santoshkumarvvv/search-hub-app',
    bentoSpan: 'compact',
    summary:
      'Cross-platform companion and cloud configuration synchronizing Next.js routes with worker services configured via declarative Render blueprints.',
    challenge:
      'Maintaining consistent environment configuration and predictable startup behavior across serverless routes and containerized Node.js services.',
    architectureSummary:
      'Uses declarative infrastructure configuration (`render.yaml` and `vercel.json`) with health-check endpoints and reproducible builds.',
    stack: ['Dart', 'Flutter', 'SQLite', 'Offline Cache', 'Cross-Platform'],
    metrics: [
      { label: 'Storage Engine', value: 'Local SQLite', delta: 'Offline-first query cache' },
      { label: 'Config Model', value: 'Declarative IaC', delta: 'render.yaml & vercel.json' },
      { label: 'Bundle Strategy', value: 'Code-Split', delta: 'On-demand lazy chunks' },
    ],
    codeSample: {
      filename: 'render.yaml',
      language: 'yaml',
      code: `services:
  - type: web
    name: search-hub-app
    runtime: node
    plan: starter
    buildCommand: npm ci && npm run build
    startCommand: npm run start
    healthCheckPath: /api/health
    envVars:
      - key: NODE_ENV
        value: production`,
    },
  },
  {
    id: 'santosh-command-hub',
    index: '04',
    title: 'Developer Command Hub & Autonomous Telemetry',
    subtitle: 'Interactive portfolio system & self-updating GitHub profile automation engine',
    category: 'cross-platform',
    categoryLabel: 'Cross-Platform',
    year: '2026',
    repoName: 'santoshkumarvvv/santoshkumarvvv',
    repoUrl: 'https://github.com/santoshkumarvvv/santoshkumarvvv',
    liveUrl: 'https://github.com/santoshkumarvvv',
    bentoSpan: 'wide',
    summary:
      'Engineering command center combining an interactive React 19 + TypeScript web application with a scheduled GitHub Actions workflow that synchronizes live commit telemetry.',
    challenge:
      'Static developer portfolios and markdown profiles quickly become outdated and fail to reflect active repository work.',
    architectureSummary:
      'Combines client-side GitHub REST API synchronization, interactive architecture simulation, and an automated GitHub Actions cron workflow.',
    stack: ['TypeScript', 'React 19', 'Tailwind CSS', 'Scrypt KDF', 'PWA'],
    metrics: [
      { label: 'Rendering', value: 'Compositor UI', delta: 'Hardware-accelerated transitions' },
      { label: 'Telemetry Sync', value: 'Scheduled Cron', delta: 'Automated GitHub REST feed' },
      { label: 'Accessibility', value: 'WCAG AA Contrast', delta: 'Semantic ARIA & focus traps' },
    ],
    codeSample: {
      filename: 'src/services/githubSync.ts',
      language: 'typescript',
      code: `export async function fetchDeveloperRepositories(username: string) {
  const response = await fetch(
    \`https://api.github.com/users/\${encodeURIComponent(username)}/repos?sort=updated&per_page=12\`,
    { headers: { Accept: 'application/vnd.github.v3+json' } }
  );
  if (!response.ok) {
    throw new Error(\`GitHub API responded with status \${response.status}\`);
  }
  return response.json();
}`,
    },
  },
];

export interface EngineeringPillar {
  index: string;
  title: string;
  discipline: string;
  description: string;
  technologies: string[];
  benchmark: string;
}

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    index: '01',
    title: 'Full-Stack TypeScript & Edge Web Systems',
    discipline: 'Web Architecture',
    description:
      'Designing type-safe React 19 and Next.js applications with deterministic state management, minimal layout shift, and low-latency in-memory BM25 search routing.',
    technologies: ['TypeScript', 'React 19', 'Next.js 15', 'Tailwind CSS', 'Node.js'],
    benchmark: 'Self-hosted typography, code-split bundles, and offline-first PWA precaching',
  },
  {
    index: '02',
    title: 'Cross-Platform Mobile Engineering',
    discipline: 'Mobile & Native UI',
    description:
      'Building native-compiled mobile applications in Dart and Flutter with clean repository-pattern architecture, local SQLite caching, and responsive touch physics.',
    technologies: ['Dart', 'Flutter', 'Clean Architecture', 'Riverpod', 'SQLite'],
    benchmark: 'Domain-driven separation across presentation, domain, and data layers',
  },
  {
    index: '03',
    title: 'Automated CI/CD & Cloud DevOps',
    discipline: 'Release Infrastructure',
    description:
      'Configuring GitHub Actions verification workflows, scheduled telemetry sync scripts, and declarative cloud deployments across Vercel and Render.',
    technologies: ['GitHub Actions', 'Docker', 'Vercel', 'Render', 'Bash / Python'],
    benchmark: 'Automated TypeScript AST verification and CodeQL static security scanning',
  },
];
