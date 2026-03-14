# The Relic Website

**The marketing site for [The Relic](https://github.com/therelicai/therelic) — landing page, pricing, and documentation at [therelic.dev](https://therelic.dev).**

This is the public-facing website that explains what The Relic is, how it works, and drives signups to the hosted platform. It is a separate concern from the [app dashboard](https://github.com/therelicai/therelic-app) — the website is static, SEO-optimized, and publicly accessible; the app is a dynamic SPA behind authentication.

> **License:** Business Source License 1.1 (BSL 1.1). Not open source.

---

## How It Fits Into The Relic Ecosystem

```
   Visitor                     User
     │                           │
     │  therelic.dev             │  app.therelic.dev
     ▼                           ▼
┌──────────────┐        ┌──────────────────┐
│  This Repo   │───────►│  therelic-app     │
│  therelic-   │  "Get  │  React Dashboard  │
│  website     │  Start"│                   │
│              │  link  │  (behind auth)    │
│  Landing     │        └────────┬─────────┘
│  Pricing     │                 │
│  Docs        │                 ▼
│  Blog        │        ┌──────────────────┐
└──────────────┘        │ therelic-platform │
                        │ Control Plane API │
                        └──────────────────┘

                        ┌──────────────────┐
                        │  therelic (OSS)   │
                        │  CLI + MCP Proxy  │
                        │  The core product │
                        └──────────────────┘
```

### Why It's Separate

| Concern | Website (`therelic.dev`) | App (`app.therelic.dev`) |
|---|---|---|
| SEO | Critical — Google indexing, meta tags, OG images | Irrelevant — behind auth |
| Rendering | Static site generation (fast first paint) | Client-side SPA |
| Auth | None (fully public) | Supabase Auth |
| Content | Marketing copy, docs, blog posts | Live data from API |
| Deploy cadence | Whenever content updates | Continuous with features |
| Bundle size | Minimal (static HTML + CSS) | Large (React + data viz) |
| Contributors | Marketing, content, design | Engineering |

---

## Pages

| Page | Route | Description |
|---|---|---|
| **Landing** | `/` | Hero section, feature highlights, how-it-works, pricing overview, footer |
| **Pricing** | `/pricing` | Detailed plan comparison (Free, Team, Enterprise) with feature table |

Planned additions:
- `/docs` — Public documentation
- `/blog` — Product updates and governance thought leadership
- `/changelog` — Release notes

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5.6 |
| Styling | Tailwind CSS 3.4 |
| Output | Static HTML (SSG) |
| Hosting | Cloudflare Pages |

Astro was chosen for zero-JS-by-default static output, fast build times, and native Tailwind integration. Pages are server-rendered at build time and served as static HTML.

---

## Design

- **Dark theme** — Consistent with the app dashboard (`gray-950` background)
- **Relic blue accent** — Custom color palette matching the design system
- **Inter font** — Same typography as the app for brand consistency
- **Responsive** — Mobile-first layout
- **OG meta tags** — Social sharing previews configured

---

## Local Development

### Prerequisites

- Node.js 20+

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

Deploys to Cloudflare Pages:

```bash
npm run build
npx wrangler pages deploy dist
```

Or connect the GitHub repo to Cloudflare Pages for automatic deploys on push.

---

## Domain Architecture

| Domain | Target | Purpose |
|---|---|---|
| `therelic.dev` | This repo | Marketing site |
| `app.therelic.dev` | therelic-app | Platform dashboard |
| `api.therelic.dev` | therelic-platform | Control plane API |
| `docs.therelic.dev` | Part of this repo (or separate) | Public documentation |

---

## Project Structure

```
src/
  layouts/
    Layout.astro       # Base HTML layout with meta tags, fonts, styles
  pages/
    index.astro        # Landing page
    pricing.astro      # Pricing page
public/
  favicon.svg          # Site favicon
astro.config.mjs       # Astro configuration
tailwind.config.mjs    # Tailwind with relic color palette
```
