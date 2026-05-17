# DESIGN

Shared design tokens and voice rules for The Relic. This file is the canonical
brand reference. It is mirrored verbatim into [therelic-app](../therelic-app/DESIGN.md)
so the marketing site and the product app stay visually in sync. Keep them
identical. When in doubt, the website's live build is the visual source of truth
(see <https://therelic.dev>).

Scope: brand mark, colors, typography, voice, verdict semantics. Component
recipes (Button, Card, etc.) are intentionally out of scope. Build them in the
consuming app using these tokens.

---

## 1. Brand mark

A circle containing three stacked horizontal rectangles. Reads as a relic
chamber with stratified tablets. The mark is `currentColor` by default so it
inherits from the surrounding text color.

```svg
<svg viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="36" stroke="currentColor" stroke-width="5"/>
  <rect x="34" y="20" width="12" height="8" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
  <rect x="20" y="34" width="40" height="12" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
  <rect x="30" y="52" width="20" height="8" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
</svg>
```

**Sizing:** 22-30px in nav, 28px in footer, 18-22px in product sidebars. Never
below 16px. Wordmark "The Relic" pairs at `text-[17px] font-semibold` next to
the 30px mark.

Do not use the previous funnel or rounded-square marks. Both were retired.

---

## 2. Color tokens

Defined in Tailwind config. The whole system is dark-first: black background,
white headings, neutral-400/500 body text, blue accent.

```js
colors: {
  relic: {
    300: '#7cc8fb',  // accent text on dark
    400: '#36adf7',  // strong accent
    500: '#0c93e8',  // primary brand
    600: '#0074c6',  // hover / pressed
  },
  // Verdict colors — high saturation, paired with relic blue.
  allow: { 400: '#10ff97', 500: '#00e887', 600: '#00c878' },
  deny:  { 400: '#ff5183', 500: '#ff3366', 600: '#e61a4f' },
  flag:  { 400: '#fff14d', 500: '#ffe600', 600: '#e6ce00' },
}
```

**Usage:**
- `relic-500` is the primary brand color. Use for CTAs, key links, the brand
  mark's blue accent, focal element borders.
- `allow` for any positive verdict, success state, "+12 this week" trend up.
- `deny` for any blocked action, error state, denial count.
- `flag` for warning, pending, "unsaved", or "review required" state.
- Never use Tailwind's default `emerald`, `red`, `amber`, `yellow`, `rose`, etc.
  for verdict UI. Use the named tokens above. (Tailwind's `green`/`red` are too
  desaturated next to the relic blue and look muddy on dark.)

**Backgrounds:**
- Page: `bg-black`
- Section variant: `bg-neutral-950/40` (slight contrast band)
- Card: `bg-white/[0.02]` with `border-white/10`
- Focal card: `bg-relic-500/[0.06]` with `border-relic-500/30`

**Verdict bar/badge opacity:** Solid colors look harsh on dark. Use `/50` to
`/55` for backgrounds with `/70` to `/85` ring for outline. Lower opacity reads
as "muddy"; this is wrong.

---

## 3. Typography

Apple-first stack. SF Pro on Apple devices, Inter as the web fallback with
OpenType features that approximate SF.

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
             "Inter", system-ui, "Segoe UI", Roboto, "Helvetica Neue",
             Arial, sans-serif;
font-feature-settings: 'ss01', 'ss03', 'cv11';
```

Mono stack: `"SF Mono", "JetBrains Mono", Menlo, Monaco, Consolas, monospace`.

**Headlines:** weight 600 (not 700), tight letter-spacing (`-0.028em` to
`-0.035em`). Fluid sizes:
- Hero: `clamp(2.75rem, 7vw, 6rem)` line-height 1.05
- Section: `clamp(2rem, 4.5vw, 3.75rem)` line-height 1.06
- Eyebrow: `text-[11-13px] uppercase tracking-[0.18em]` — neutral-500 by default,
  `text-relic-300` for the most important sections (Solution, Pillars, Stack,
  product-preview eyebrows like `/01 · Dashboard`).
- Lead: `clamp(1.125rem, 1.6vw, 1.375rem)` line-height 1.45

Body copy: `text-[14-15px]` for cards, `text-[11-12px]` for table cells and
data-dense UI. Use `text-neutral-400` for primary body, `text-neutral-500` for
secondary, `text-neutral-600` for muted/captions.

---

## 4. Voice

Short declarative sentences. Apple-influenced cadence. Break headlines across
two lines for rhythm:

> See every agent.
> Govern every decision.

**Rules:**
- **No em dashes** (`—`). Replace with periods (clause split), colons (lead-in or
  list), or middle dot ` · ` (compact dividers like titles and eyebrows). If
  you write one, fix it before commit. The website has zero em dashes.
- **No corporate hedging.** "The Relic is the authorization layer for the agent
  era." Not "The Relic provides a comprehensive authorization solution…".
- **Numbers, not adjectives.** "Five minutes to first verdict" beats "fast setup".
- **Tool-flavored proper nouns.** `SecOps console`, `Policy editor`, `Trace
  viewer`, `Agent fleet`. Capitalize as product nouns when they refer to a
  specific surface or concept.

**Sentence patterns that work:**
- Problem then solution: "Agents act on your behalf. You can't see what they did."
- Two-beat declarative: "Edit. Replay. Save."
- Three-stage flow: "One policy. Every agent. Seconds."

---

## 5. Verdict semantics

Whenever the UI shows the outcome of a policy evaluation, use these conventions
exactly. They appear in tables, swimlanes, KPIs, badges, and code blocks.

| State | Color | When |
|---|---|---|
| `allow` | `allow-*` (green) | Action was permitted by policy. Default success. |
| `deny`  | `deny-*` (red)    | Action was blocked by policy. |
| `flag`  | `flag-*` (yellow) | Action permitted but flagged for review. Or "unsaved", "pending", "needs attention". |
| `pending` | `neutral-700/40` with animated pulse | Awaiting verdict (in-flight). Never colored. |

**Swimlane bar widths telegraph runtime:** `flex-[3]` for allow (full action
duration), `flex-[2]` for flag and pending (quick check), `flex-[1]` for deny
(instant rejection before execution).

---

## 6. Visual reference

The marketing site at <https://therelic.dev> contains pixel-faithful mockups of
three core platform screens in its product-preview sections:

- `/01 · Dashboard` — KPI cards, runs chart, top-denied targets, recent runs table
- `/02 · Live` — per-agent swimlanes with an expandable action-detail panel
- `/03 · Policy` — YAML editor with diff-badge replay panel

When building the corresponding screen in `therelic-app`, **the website mockup
is the canonical visual spec**. Match it. If you need to deviate, update both
the app screen and the website mockup together so they stay aligned.

---

## Keeping this in sync

This file lives in two repos: `therelic-website` (canonical) and `therelic-app`
(mirror). When you change one, copy the change to the other in the same PR.
There is no automated sync. If they drift, the website is the source of truth.
