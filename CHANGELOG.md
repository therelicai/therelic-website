# Changelog

All notable changes to therelic-website are documented here. The format
is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added — Slice 14b: Live observability

- **`/live-observability`** concept page — full explainer for the
  Live view, the intent-before-verdict pattern, and the standalone-
  mode promise.
- **Homepage** swap — live observability is now the headline pillar.
  Hero subhead leads with "see every agent in your org acting in real
  time"; policy testing demotes to second pillar.
- **Governance Platform bullet list** reordered to put the Live view
  first.
- **Nav** adds a `/live-observability` link before `/policy-testing`.

### Constraints respected

- Universal-policy claims are still off-limits — slice 15 unlocks
  that copy.

### Added — Slice 13: Replay & diff badge

- **`/policy-testing`** concept page — full explainer for the replay &
  diff capability, the trust loop (edit → replay → inspect), what the
  diff counts mean, and the engineering note on why the simulator can't
  drift from production enforcement.
- **Homepage** new value-prop line under the hero: "New: test every rule
  against your real history before you ship it." Links to
  `/policy-testing`.
- **Homepage Governance Platform bullet** updated from "Web-based policy
  editor" to "Replay-and-diff policy editor — test every rule against
  your real history before you ship it."
- **Nav** adds a `/policy-testing` link.

### Constraints respected

- No live-fleet or universal-policy claims yet. Those unlock with slices
  14 and 15 respectively, per RELIC.md.
