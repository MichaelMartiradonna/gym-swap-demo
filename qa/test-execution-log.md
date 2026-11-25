# Gym Swap — Test Execution Log

- **Date Executed:** 2026-11-24
- **Target:** `https://gymswap.seeform.ai` (Build `2.8.1`)
- **Environments:** Desktop Chromium (`1280×800`) and Mobile Chromium (`390×844`)
- **Summary:** 18 test cases executed — **11 Passed**, **7 Failed** (7 reproducible defects filed as `GS-1` through `GS-7`).

| Test ID | Area | Desktop (`1280×800`) | Mobile (`390×844`) | Linked Bug | Observed Notes |
|---|---|---|---|---|---|
| `TC-01` | Initial load & asset health | **PASS** | **PASS** | — | Loaded cleanly (`HTTP 200` on all 43 initial requests); 0 console errors, 0 broken images. |
| `TC-02` | Demo & About navigation | **PASS** | **PASS** | — | `/about/` (`Scope & disclaimer`) and `/pilot/` (`Six-row pilot`) load cleanly and return to `/`. |
| `TC-03` | Exact, partial, whitespace search | **PASS** | **PASS** | — | `seated cable row`, `row` (8 suggestions, 27 results), and `"  row  "` (trimmed identically) all work. |
| `TC-04` | Unsupported & XSS-like search | **PASS** | **PASS** | — | Empty input is a safe no-op; `<script>alert(1)</script>`, `burpee`, and `swimming` safely return `"No reviewed match yet. Try another name or browse below."` |
| `TC-05` | Search clear & `Escape` reset | **FAIL** | **FAIL** | `GS-7` | No Clear (`×`) button on search input; pressing `Escape` leaves `"row"` in the input unchanged. |
| `TC-06` | Swap cards & comparison details | **PASS** | **PASS** | — | `Keeps / Changes / Check`, `Setup`, `How to do it`, `Bench` checks, and `Sources` all display cleanly. |
| `TC-07` | Equipment labels & `"In use"` conflict | **FAIL** | **FAIL** | `GS-5` | Quick dropdown and panel dropdown use different labels (`"In use"` vs `"This setup is in use"`). `Use this swap` stays enabled when `"In use"` and produces duplicate undo buttons (`Undo` and `Undo selection`). |
| `TC-08` | `Filter by my equipment` toggle | **PASS** | **PASS** | — | Toggling ON excludes known equipment conflicts; toggling OFF widens options without erasing reports. |
| `TC-09` | Hide all swaps & Favorite independence | **FAIL** | **FAIL** | `GS-2` | Hiding all 3 swaps shows recovery, but hiding a favorited swap (`Chest-supported dumbbell row`) clears its Favorite state; after Restore + reload it remains unfavorited. |
| `TC-10` | Persistence vs. reload reset | **PASS** | **PASS** | — | Non-hidden Favorites (`Seated band row`) and Hidden state persist across reload; temporary equipment reports reset cleanly. |
| `TC-11` | `View original exercise` mode state | **FAIL** | **FAIL** | `GS-3` | Clicking `View original exercise: Seated cable row` replaces swap view with `Explore exercise` (Browse UI) while leaving `Replace an exercise` tab `[pressed]`. |
| `TC-12` | Paste mixed matched/typo/unmatched workout | **FAIL** | **FAIL** | `GS-1` | Pasting 5 numbered lines returned only 3 exercises; `3. Burpees 3x15` and `5. Lat Puldown 3x12` were merged into the previous exercises' `Original workout notes` textareas. |
| `TC-13` | Workout step-through & reload resume | **PASS** | **PASS** | — | Choosing `Chest-supported dumbbell row`, advancing to exercise 2, and reloading resumed at `exercise 2 of 3` with prior swap intact. |
| `TC-14` | Manage workout (`Restart`/`Replace`/`Delete`) | **PASS** | **PASS** | — | Rename, Restart, Replace, and Delete all executed cleanly with expected state updates. |
| `TC-15` | UI copy, duplicate controls & disabled AI | **FAIL** | **FAIL** | `GS-7` | `"Leg press 1 alternatives"` / `"Hip-thrust machine 1 alternatives"`, `"Explore another exercise"` shown in Replace mode, duplicate `"Back to workout entry"` controls under `See alternatives`, and interactive-looking quick chips in disabled `Ask about this swap`. |
| `TC-16` | Mobile layout & overflow (`390×844`) | N/A | **PASS** | — | Clean load at `390×844` has `0 px` horizontal overflow across landing, search, expanded swap, and workout views. |
| `TC-17` | Mobile touch targets & input labels | N/A | **FAIL** | `GS-6` | Top demo nav links are `22.5 px` tall (`About` is `40.9×22.5 px`); source link is `39.1 px` tall; `#equipment-filter` switch (`19.2×19.2 px`) and radio inputs lack direct input labels. |
| `TC-18` | Heading hierarchy (`h1`–`h3`) | **FAIL** | **FAIL** | `GS-4` | Landing places `<h2>Equipment for this visit Optional</h2>` before `<h1>Explore exercises</h1>`; searching leaves an empty hidden `<h1>` while visible headings start at `<h2>`. |
