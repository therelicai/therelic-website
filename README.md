# The Relic Website

**The marketing site for [The Relic](https://github.com/therelicai/therelic) — landing page, pricing, and documentation at [therelic.dev](https://therelic.dev).**

This is the public-facing website that explains what The Relic is, how it works, and drives signups to the hosted platform. It is a separate concern from the [app dashboard](https://github.com/therelicai/therelic-app) — the website is static, SEO-optimized, and publicly accessible; the app is a dynamic SPA behind authentication.

> **License:** Apache License 2.0 — same license as the [runtime](https://github.com/therelicai/therelic).
> The platform and dashboard repos are BSL 1.1; the runtime and this site
> are full OSS. Trademarks reserved — see [TRADEMARKS.md](./TRADEMARKS.md).

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
| **Live observability** | `/live-observability` | Concept page on the Live view — "every agent in your org, acting in real time." Headline pillar from slice 14 onward. |
| **Policy testing** | `/policy-testing` | Concept page on replay & diff — "test every rule against your real history before you ship it." |
| **Universal policy** | `/universal-policy` | Concept page on labeled-set policy enforcement — "one policy change applies to every agent in the set within seconds." Third pillar; ships in slice 15. |
| **Self-host** | `/self-host` | Self-hosting guide for the whole stack |

Planned additions:
- `/docs` — Public documentation
- `/blog` — Product updates and governance thought leadership
- `/changelog` — Release notes

> Cross-repo product contracts (selector shape, event types, replay protocol)
> live in [RELIC.md](https://github.com/therelicai/therelic-platform/blob/main/RELIC.md).
> Don't write marketing copy on this site that contradicts what RELIC.md
> says is currently shipping.

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
