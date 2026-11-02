# Santosh Kumar — Systems & Search Engine Engineering

Systems & Search Engine Architect building low-latency in-memory BM25 lexical search systems, deterministic TypeScript & React 19 interfaces, Scrypt KDF cryptographic authentication, and native Flutter mobile applications.

- **Portfolio (Live):** [https://santoshkumarvvv.github.io/](https://santoshkumarvvv.github.io/) *(GitHub Pages — static site)*
- **Portfolio (Vercel, if redeployed):** [https://vvv-portfolio.vercel.app](https://vvv-portfolio.vercel.app) *(serverless API routes only work here)*
- **SearchHub Engine Repository:** [https://github.com/santoshkumarvvv/search-hub-](https://github.com/santoshkumarvvv/search-hub-)
- **Dev Showcase CI/CD Repository:** [https://github.com/santoshkumarvvv/dev-showcase](https://github.com/santoshkumarvvv/dev-showcase)

---

### 01 · Engineering Architecture & Core Disciplines

- **Full-Stack TypeScript & Search Systems:** In-memory Okapi BM25 lexical scoring, Damerau-Levenshtein typo tolerance, token-bucket debouncing, and code-split React 19 + Vite bundles.
- **Cross-Platform Mobile Engineering:** Native Flutter & Dart applications structured with Domain-Driven Design (DDD), Clean Architecture, Riverpod state management, and local SQLite caching.
- **Automated CI/CD & Cloud DevOps:** GitHub Actions build & static analysis pipelines, CodeQL security scanning, and declarative cloud configurations.

---

### 02 · Featured Production Repositories & Case Studies

| System / Repository | Primary Stack | Architectural Focus | Access |
| :--- | :--- | :--- | :--- |
| **[Search Hub Engine](https://github.com/santoshkumarvvv/search-hub-)** | `TypeScript` · `Next.js 15` · `Tailwind CSS` | Federated multi-index query router with token-bucket debouncing and low-latency in-memory BM25 lexical ranking. | [View Source →](https://github.com/santoshkumarvvv/search-hub-) |
| **[Dev Showcase Blueprint](https://github.com/santoshkumarvvv/dev-showcase)** | `Dart` · `Flutter` · `GitHub Actions` | Modular domain-driven engineering blueprint with automated AST & static lint verification and CI matrix builds. | [View Source →](https://github.com/santoshkumarvvv/dev-showcase) |
| **[Search Hub Mobile Client](https://github.com/santoshkumarvvv/search-hub-app)** | `Dart` · `Flutter` · `SQLite` | Cross-platform companion client and declarative cloud deployment configuration (`vercel.json` + `render.yaml`). | [View Source →](https://github.com/santoshkumarvvv/search-hub-app) |
| **[Systems Command Hub](https://github.com/santoshkumarvvv/santoshkumarvvv.github.io)** | `React 19` · `TypeScript` · `Tailwind v4` | Interactive portfolio web application, architecture simulator, `⌘K` command palette, and GitHub telemetry sync. Live at [santoshkumarvvv.github.io](https://santoshkumarvvv.github.io/). | [View Source →](https://github.com/santoshkumarvvv/santoshkumarvvv.github.io) |

---

### 03 · Interactive Command Hub (Repository Application Structure)

This repository houses a **React 19 + TypeScript + Vite + Tailwind CSS v4** web application featuring:

- **Split-Screen Architectural Topology**: Interactive SVG node diagram illustrating Client, Search Hub Core, Native Flutter Engine, and Cloud CI/CD layers.
- **Code-Split Interactive Architecture Studios**: On-demand lazy-loaded modules (`React.lazy` + `Suspense`) for SearchEmbed Studio, API Gateway Console, Federated Search Sandbox, and Architecture Simulator.
- **Bilingual Hindi / English Toggle**: Instant client-side localization persisted in `localStorage` under `"lang"` and applied before first paint.
- **Keyboard-First Command Palette (`⌘K` / `Ctrl+K`)**: Instant navigation across projects, repositories, and dual-theme (`Dark` / `Light`) surface switching.

```text
santoshkumarvvv.github.io/
├── .github/
│   └── workflows/
│       └── codeql.yml             # CodeQL static analysis
├── api/
│   ├── og/route.ts                # Dynamic OG image (Vercel only)
│   ├── search/route.ts            # Zero-dependency serverless Okapi BM25 search endpoint (Vercel only)
│   └── stats/route.ts             # GitHub telemetry stats endpoint (Vercel only)
├── public/
│   └── sw.js                      # Offline-first Service Worker source
├── src/
│   ├── components/
│   │   ├── ArchitectureSimulator.tsx  # Lazy-loaded interactive load & cache simulator
│   │   ├── CaseStudyModal.tsx         # Lazy-loaded fullscreen case study modal
│   │   ├── CommandPalette.tsx         # Lazy-loaded ⌘K keyboard navigation & theme switcher
│   │   ├── FederatedSearchSandbox.tsx # Lazy-loaded in-memory lexical ranking sandbox
│   │   ├── ProjectVisuals.tsx         # High-contrast vector schematics & bento artworks
│   │   ├── SaasGatewayConsole.tsx     # Lazy-loaded Scrypt KDF & rate-limiter console
│   │   └── SearchEmbedStudio.tsx      # Lazy-loaded SearchEmbed widget configurator
│   ├── data/
│   │   └── portfolioData.ts           # Typed case studies and engineering pillars
│   ├── App.tsx                        # Main application layout & live GitHub API synchronizer
│   ├── index.css                      # Tailwind CSS v4 configuration & custom dark variant
│   └── main.tsx                       # Application entry point & Latin font subset imports
├── embed.js                           # Standalone in-browser search widget (now Okapi BM25)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

#### Local Quickstart

```bash
git clone https://github.com/santoshkumarvvv/santoshkumarvvv.github.io.git
cd santoshkumarvvv.github.io
npm install
npm run dev
```

---

### 04 · Live Commit & Repository Telemetry

<!-- START:activity -->
```text
2026-10-31T18:25  PushEvent    santoshkumarvvv/santoshkumarvvv
2026-10-29T15:19  PushEvent    santoshkumarvvv/search-hub-
2026-10-29T15:12  CreateEvent  santoshkumarvvv/search-hub-
2026-10-29T14:10  PushEvent    santoshkumarvvv/dev-showcase
2026-10-29T10:49  PushEvent    santoshkumarvvv/santoshkumarvvv
2026-10-29T10:49  PushEvent    santoshkumarvvv/search-hub-
2026-10-29T10:48  PushEvent    santoshkumarvvv/search-hub-
2026-10-29T10:48  PushEvent    santoshkumarvvv/search-hub-
```
<!-- END:activity -->

---

### 05 · Content Security Policy (CSP) & Hardening Recommendations

For production deployments embedding `embed.js` or serving this portfolio, configure the following Content Security Policy headers:

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://santoshkumarvvv.github.io; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https:; connect-src 'self' https://api.github.com https://api.web3forms.com; frame-ancestors 'none';
```

---

### 06 · Deploying the Serverless BM25 Search API (`api/search/route.ts`) to Vercel

This repository includes a self-contained, zero-dependency serverless BM25 search endpoint at `api/search/route.ts`. It implements:

- **HTTP GET `?q=` Query Handler**: Tokenizes queries and ranks a 10-document engineering index using Okapi BM25 (`k1 = 1.2`, `b = 0.75`) with Robertson-Spärck Jones IDF.
- **In-Memory Rate Limiting**: Enforces 10 requests per minute per client IP using a sliding-window `Map<string, number[]>` (best-effort on serverless — per-instance, not globally shared).
- **Strict CORS Policy**: Allows cross-origin requests from `https://santoshkumarvvv.github.io` and `https://vvv-portfolio.vercel.app`.

**Important:** `/api/*` routes do **not** work on GitHub Pages (static hosting only, returns 404). These endpoints require a Vercel (or equivalent serverless) deployment. The client-side `embed.js` widget works everywhere because it runs entirely in-browser.

#### Step-by-Step Deployment to Your Vercel Project (`search-hub-`)

1. **Copy the Route File into Your Vercel Repository**:
   - **Next.js App Router (`app/` directory)**: Copy `api/search/route.ts` from this repo into `app/api/search/route.ts` in your Vercel project.
   - **Standard Vercel Serverless (`api/` directory)**: Copy `api/search/route.ts` directly into `api/search/route.ts` at the root of your Vercel project.
   ```bash
   mkdir -p /path/to/your-vercel-project/app/api/search
   cp api/search/route.ts /path/to/your-vercel-project/app/api/search/route.ts
   ```
2. **Commit & Push to Trigger Vercel Deployment**:
   ```bash
   cd /path/to/your-vercel-project
   git add app/api/search/route.ts
   git commit -m "feat(api): add BM25 /api/search endpoint with rate limiting and CORS"
   git push origin main
   ```
