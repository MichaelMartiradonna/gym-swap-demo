# Gym Swap — Playwright E2E Smoke Suite

[![Playwright E2E](https://github.com/MichaelMartiradonna/gym-swap-demo/actions/workflows/e2e.yml/badge.svg)](https://github.com/MichaelMartiradonna/gym-swap-demo/actions/workflows/e2e.yml)

Automated end-to-end browser tests covering Gym Swap's core swap flow, equipment filtering, `localStorage` persistence, workout resume, and responsive layout across both **desktop (`1280×800`)** and **phone (`390×844`)** Chromium viewports.

Pairs directly with the manual QA test plan in [qa/test-plan.md](../qa/test-plan.md): the highest-value manual cases are automated here and wired into GitHub Actions ([.github/workflows/e2e.yml](../.github/workflows/e2e.yml)).

## Test Coverage (6 Tests × 2 Viewports = 12 Browser Checks)

| Spec ID | Manual Plan Link | What It Verifies |
|---|---|---|
| `E2E-01` | `TC-01`, `TC-16` | Page loads cleanly with 0 console/page errors, visible mode controls, and 0 px horizontal overflow on desktop (`1280×800`) and phone (`390×844`) |
| `E2E-02` | `TC-03`, `TC-04` | Exact search (`seated cable row`), trimmed partial search (`"  row  "` → `Horizontal rowing`), and safe no-match handling for XSS-like input (`<script>alert(1)</script>`) |
| `E2E-03` | `TC-06` | Pick `Seated cable row` → inspect reviewed swap card (`Keeps` / `Changes` / `Check`) → expand written `<details>` instructions → confirm `Use this swap` |
| `E2E-04` | `TC-07`, `TC-08` | Report `"two dumbbells busy"` → enable `Filter by my equipment` → verify `Chest-supported dumbbell row` is excluded while `Seated band row` and `Seated machine row` remain → open `Seated band row` → undo equipment report |
| `E2E-05` | `TC-10` | Favorite a swap and log temporary busy equipment → reload → verify Favorite persists in `localStorage` while temporary equipment state resets cleanly |
| `E2E-06` | `TC-02`, `TC-13` | Create a 2-exercise workout, advance to Exercise 2, reload, confirm `Resume` restores position; visit `/about/` and return via `Return to app` |

## Run Locally

From the repository root:

```powershell
npm ci
npx playwright install chromium
npm run test:e2e
```

By default, [playwright.config.mjs](../playwright.config.mjs) serves this repository's `dist/` with the static preview server (`node scripts/preview.mjs 50790`) automatically. To run the same smoke checks against a deployed URL instead:

```powershell
$env:E2E_BASE_URL = "https://gymswap.seeform.ai"
npm run test:e2e
```

## CI Workflow

[.github/workflows/e2e.yml](../.github/workflows/e2e.yml) runs on `push` to `main`, `pull_request`, and manual `workflow_dispatch`:
1. Runs the demo's hosting tests (`npm test`).
2. Installs Playwright Chromium (`npx playwright install --with-deps chromium`).
3. Runs `npm run test:e2e` across both `desktop-chromium` and `mobile-chromium` and uploads `playwright-report/` as an artifact if any check fails.

## Verified Local Run (2026-11-25)

- **Playwright E2E (`npm run test:e2e`):** `12 passed` — all 6 smoke tests passing on both `desktop-chromium` (`1280×800`) and `mobile-chromium` (`390×844`).
- **Demo hosting tests (`npm test`):** `10 pass, 0 fail`.
- **Same suite against the live site (`E2E_BASE_URL=https://gymswap.seeform.ai`):** `12 passed`.
