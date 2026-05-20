# The Relic Website

**The marketing site for [The Relic](https://github.com/therelicai/therelic),
deployed to [therelic.dev](https://therelic.dev).** An Astro static
site — no SPA, no client-side data, just SEO-tuned HTML and a few
interactive scroll/carousel widgets.

---

## Get started in 2 minutes

Requires Node 20+.

```bash
git clone https://github.com/therelicai/therelic-website
cd therelic-website
npm install
npm run dev          # http://localhost:4321
```

Build + preview the production output:

```bash
npm run build        # → dist/
npm run preview      # serves dist/ locally
```

Deploys via GitHub Actions on push to `main` — see
`.github/workflows/deploy.yml`. Hosted on GitHub Pages today; the
output is fully static so any static host (Cloudflare Pages, Vercel,
S3+CloudFront) works.

---

## What's in here

```
src/
  layouts/Layout.astro       Base HTML, fonts, OG meta, global CSS,
                             reveal-on-scroll observer
  pages/
    index.astro              Landing page — hero cosmogram, three-
                             step scrollytelling stage, pillar
                             carousel, integrations, stack, CTA
    universal-policy.astro   Concept page: labeled-set policies
    policy-testing.astro     Concept page: replay-and-diff
public/                      Favicons + OG images
astro.config.mjs             Astro config
tailwind.config.mjs          Tailwind config (Relic blue palette)
DESIGN.md                    Brand mark, color tokens, voice rules.
                             Canonical for the whole stack.
```

---

## Design

The site is **dark-only by default** — the app dashboard ships a
light-mode toggle, the marketing site does not. Visual contracts:

- **Brand mark:** chamfered rectangle with a single ellipse inside.
  Defined in [DESIGN.md](./DESIGN.md). Never the prior funnel,
  rounded-square, or circle-and-rectangles marks.
- **Color tokens:** `relic-*` for brand, `allow-*` / `deny-*` /
  `flag-*` for verdict semantics. Don't use raw Tailwind
  `green`/`red`/`yellow`.
- **No em dashes** in copy. Use periods, colons, or middle-dot `·`
  dividers.

[DESIGN.md](./DESIGN.md) is mirrored verbatim into
[therelic-app/DESIGN.md](https://github.com/therelicai/therelic-app/blob/main/DESIGN.md);
when one changes, the other must.

---

## Scrollytelling + carousel

The homepage has two interactive surfaces worth knowing about if you
edit `src/pages/index.astro`:

1. **Sticky-scroll stage** for the three product previews
   (Dashboard / Live / Policy). Outer section is `~180vh` tall;
   inside, a `position: sticky` stage pins for the full scroll
   length. JS tags each header/mockup with `data-position=past|active|future`
   and CSS slides them in horizontally. Mobile falls back to
   plain vertical stacking via `display: contents` + `order` to
   interleave header→mockup pairs.

2. **Pillar carousel** for the four "how it works" panels
   (Policy / Exfiltration / Live / Trace Audit). Flex track inside
   `overflow: hidden`. JS translates the track on tab click.
   Visible 8rem gap between panels for breathing room during the
   transition.

Both honor `prefers-reduced-motion`.

---

## The four repos

| Repo | What it is |
|---|---|
| [therelic](https://github.com/therelicai/therelic) | The OSS runtime. CLI + MCP proxy + policy engine. |
| [therelic-platform](https://github.com/therelicai/therelic-platform) | Server side. Trace storage, governance, the REST API. |
| [therelic-app](https://github.com/therelicai/therelic-app) | React dashboard. |
| **therelic-website** (this repo) | This site. |

All four are Apache 2.0.

---

## Domain map

| Domain | Repo |
|---|---|
| `therelic.dev` | This repo |
| `app.therelic.dev` | therelic-app |
| `api.therelic.dev` | therelic-platform |

---

## License

[Apache License 2.0](LICENSE). Trademarks reserved — see
[TRADEMARKS.md](TRADEMARKS.md).
