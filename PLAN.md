# Gym Swap: public portfolio demo PLAN.md

Owner: Michael Martiradonna. Written 2026-10-20. Planner: Claude (Opus, high). Builder: Codex. Reviewer: Claude (Opus, high).

**Harness note.** GOALS.md and DECISIONS.md say every change goes to the private Lab first and production (2.8.1, owner-private) changes only on Michael's explicit instruction. This plan creates a third, separate surface, a public read-only demo, and touches neither production nor the Lab. Michael's OVERRIDE for this new surface is recorded by his approval of this PLAN.md.

## Goal

A public URL a hiring manager can open without signing in, showing the real Gym Swap frontend with the full reviewed library (133 exercises, 270 comparisons), a preloaded synthetic workout, equipment entry, and swap selection. AI explanation calls are disabled, exactly as in the Lab. Plus a README top a non-fitness reader can scan in 30 seconds.

## Non-goals

No production or Lab change. No model calls. No personal workouts, equipment notes, D1 database, keys, or `.openai/hosting.json` copied. No new app features.

## Steps

### Step 1: public snapshot build
Files: new checkout `gym-swap-demo/` beside `gym-swap-lab/`, created the same way the Lab was (see `gym-swap-lab/README.md` and its `scripts/`).
- Reuse the Lab's snapshot script to produce built public assets from the reviewed source revision in `PRODUCTION_RC_2_9_0_RC_1.md`.
- Banner text: "Portfolio demo · reviewed library · AI explanations disabled". All `/api/` routes return the same unavailable result as the Lab.
- Preload one synthetic workout (six lines, no real person) on first visit so the first screen is not empty; "New workout" clears it.
- Tests: copy the Lab's 9 hosting regressions and add `test_demo_has_no_private_files` (asserts no `.env*`, `db/`, `.openai/`, `*.sqlite*`, `evaluation/` in the output) and `test_demo_preloads_sample_workout`.

### Step 2: public hosting
Files: `gym-swap-demo/README.md`, a GitHub Pages or Cloudflare Pages config.
- Deploy the static output publicly. Cloudflare Pages is preferred because the Lab already targets a Worker-style layout; GitHub Pages is the fallback (static only, API routes become 404s, which the frontend already handles as unavailable).
- Record the URL and the source revision fingerprint in `gym-swap-demo/README.md`.

### Step 3: README top for `gym-swap-site/README.md`
Files: `gym-swap-site/README.md` (prepend only; nothing below is edited).
- Claude writes 12 lines: one sentence on what it does, the numbers (133 exercises, 270 reviewed comparisons, 357 tests, deterministic rules decide, optional grounded AI explains), the demo link, one phone screenshot (`gym-swap-2.8.0-phone.jpg`), and a three-line architecture (static frontend, rules engine, optional explanation service with retrieval over reviewed notes). Then a divider and the existing content unchanged.

### Step 4: 90-second video script
Files: `gym-swap-demo/VIDEO_SCRIPT.md`. Claude writes; Michael records on the Pixel 8 in Brave.

## Test command

```bash
cd gym-swap-site && npm test
cd ../gym-swap-demo && npm test
```

## Review checklist

- `git status` in `gym-swap-site` shows only `README.md` changed; `gym-swap-lab` unchanged.
- The public output contains zero private files (test above) and zero personal workout text.
- Demo loads on a phone and the sample workout's swap flow works end to end.
