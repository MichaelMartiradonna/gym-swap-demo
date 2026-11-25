# Gym Swap — Manual QA Test Plan

## 1. Purpose & System Under Test
- **Application:** Gym Swap (`https://gymswap.seeform.ai`)
- **Build Tested:** `2.8.1` (Early beta · 133 exercises · 29 starting exercises · 270 reviewed comparisons)
- **Goal:** Verify the core exercise discovery, equipment-based swap flow, saved-workout workflow, browser persistence, mobile usability, and basic accessibility across desktop and phone viewports, complementing the 357 automated Node tests in Gym Swap's private 2.8.1 source suite.

## 2. Scope

### In Scope
1. Initial page load, top demo navigation (`Standard app`, `Six-row pilot`, `About`), and error-free network/console behavior.
2. Search and discovery (`Browse exercises`, exact/partial/whitespace/invalid/XSS-like inputs, movement and muscle browsing).
3. Core swap flow (`Replace an exercise`, `Keeps / Changes / Check` comparisons, `Check equipment`, `Filter by my equipment`, `Use this swap`, `See other swaps`, `Skip for now`, `Favorite`, `Hide this exercise`, `View original exercise`).
4. Browser persistence (`localStorage` persistence of Favorites, Hidden items, and Saved Workouts across reloads; session reset of temporary equipment reports).
5. Workout import and step-through (`Use a workout`, pasting mixed matched/unmatched lines, selecting swaps, reloading to resume, `Restart`, `Replace`, and `Delete`).
6. Mobile layout (`390×844` viewport overflow, touch target sizing) and basic accessibility (heading hierarchy, form labels, keyboard behavior).

### Out of Scope
- Live AI explanation generation (intentionally disabled in the public portfolio demo).
- Backend services and server-side configuration (the public demo is fully static).
- Cross-device sync or user accounts (not part of the product).

## 3. Risk Assessment

| Risk Area | Impact | Likelihood | Mitigation / Test Focus |
|---|---|---|---|
| **Workout parser misattributes unmatched lines** | High — user silently loses exercises from a pasted workout | Medium | Test mixed valid, typo, blank, and unsupported lines (`TC-12`) |
| **Equipment conflicts not enforced on selection** | High — user selects a swap requiring busy/missing equipment | Medium | Mark required equipment `"In use"` and test filtering + selection (`TC-07`, `TC-08`) |
| **State collision between Favorite, Hide, and Reload** | Medium — user loses saved preferences | Medium | Favorite, hide, restore, and reload to verify independent persistence (`TC-09`, `TC-10`) |
| **Mode confusion between Browse and Replace** | Medium — user loses swap context mid-workout | Medium | Test `View original exercise` and navigation back to swaps (`TC-11`) |
| **Mobile viewport overflow or cramped tap targets** | Medium — app is primarily used on a phone on the gym floor | High | Inspect `390×844` width, overflow, and interactive control dimensions (`TC-16`, `TC-17`) |
| **Accessibility gaps (headings, labels, keyboard)** | Medium — screen-reader and keyboard users struggle to navigate | Medium | Audit `h1`–`h3` order, input labels, and `Escape` / clear behavior (`TC-05`, `TC-18`) |

## 4. Test Environments
- **Desktop:** Chromium, `1280×800` viewport, standard mouse + keyboard.
- **Mobile:** Chromium responsive emulation, `390×844` viewport (iPhone-class phone width), fresh page load and reload checks.
- **State baseline:** Tested with clean browser storage and verified across hard reloads (`F5` / full reload).

## 5. Severity & Priority Definitions
- **High / P1:** Core user workflow loses data, hides user input, or produces an incorrect result with no obvious recovery.
- **Medium / P2:** Feature behaves inconsistently, drops saved preference state, breaks mode navigation, or degrades accessibility/usability on a main path.
- **Medium / P3:** Measurable usability or standards gap (e.g., mobile touch target size) without blocking task completion.
- **Low / P3:** Copy error, pluralization mismatch, duplicate navigation control, or minor UX polish issue.

## 6. Test Cases

### Suite A — Load & Navigation
| ID | Title | Steps | Expected Result |
|---|---|---|---|
| `TC-01` | Initial load & asset health | Open `https://gymswap.seeform.ai/`. Check page title, build footer, network responses, images, and console. | Page renders cleanly (`Build 2.8.1`), HTTP 200 on all assets, 0 console errors, 0 broken images. |
| `TC-02` | Demo & About navigation | Open `About`, `Six-row pilot`, and return to `Standard app`. | Each page loads cleanly (`HTTP 200`) and links back to the main app without errors. |

### Suite B — Search & Discovery
| ID | Title | Steps | Expected Result |
|---|---|---|---|
| `TC-03` | Exact, partial, and whitespace queries | In `Browse exercises`, search `seated cable row`, `row`, and `"  row  "`. | Exact match opens card; partial and padded `"  row  "` return identical trimmed results/suggestions. |
| `TC-04` | Unsupported & special-character queries | Submit empty query, `<script>alert(1)</script>`, `burpee`, and `swimming`. | Empty submit is a safe no-op; invalid/unsupported queries show a clear no-match message with no script execution. |
| `TC-05` | Search clear & keyboard reset | Type `row`, run Search, then look for a Clear control and press `Escape`. | User can clear the search box with a single click or `Escape`. |

### Suite C — Core Swap Flow & Equipment Filtering
| ID | Title | Steps | Expected Result |
|---|---|---|---|
| `TC-06` | Swap cards & comparison details | Open `Replace an exercise` → `Seated cable row`. Inspect `Keeps / Changes / Check`, `Setup`, `How to do it`, and `Sources`. | Reviewed swap cards render deterministic tradeoffs and expandable instructions. |
| `TC-07` | Equipment checks & conflict handling | Open `Chest-supported dumbbell row` → expand `Check equipment`. Compare quick dropdown vs. panel dropdown; set required dumbbells to `"In use"` and test `Use this swap`. | Equipment labels match across controls; marking required equipment `"In use"` blocks or warns clearly before confirming the swap. |
| `TC-08` | Filter by my equipment toggle | Toggle `Filter by my equipment` ON and OFF after reporting equipment busy/unavailable. | ON excludes known conflicts and prioritizes ready setups; OFF widens the list without clearing reports. |
| `TC-09` | Hide all swaps & Favorite independence | Favorite `Chest-supported dumbbell row`, hide all 3 swaps for `Seated cable row`, open `Menu → Exercise preferences`, restore `Chest-supported dumbbell row`, and reload. | Empty-swaps state offers recovery; restoring a hidden exercise preserves its Favorite state across reload. |
| `TC-10` | Persistence vs. session reset on reload | Favorite an exercise, report equipment status, reload the page. | Favorites and Hidden exercises persist in `localStorage`; temporary equipment reports reset on reload. |
| `TC-11` | View original exercise & mode consistency | From a swap card under `Replace an exercise`, click `View original exercise: Seated cable row`. | Original instructions display without breaking active mode tab state or stranding the user outside swap mode. |

### Suite D — Workout Import & Resume Flow
| ID | Title | Steps | Expected Result |
|---|---|---|---|
| `TC-12` | Paste mixed matched, typo, and unmatched lines | Open `Use a workout → New workout`. Paste 5 numbered lines including `3. Burpees 3x15` and `5. Lat Puldown 3x12`. Click `Review exercises`. | All 5 exercises appear as individual review cards, with unmatched/typo lines preserved as standalone unresolved entries. |
| `TC-13` | Step through workout, pick swap, and reload | Choose a swap on Exercise 1, advance to Exercise 2, reload page, and click `Resume`. | Browser restores the workout name, position (`exercise 2`), and prior swap choice. |
| `TC-14` | Manage workout (`Restart`, `Replace`, `Delete`) | Open `Workout overview → Manage this workout` and test renaming, restarting, replacing, and deleting the saved workout. | Each action works explicitly without corrupting state. |
| `TC-15` | Disabled AI panel & UI copy consistency | Check `Choose the exercise to replace` list counts, `See other swaps` footer button, `See alternatives` back buttons, and `Ask about this swap`. | Singular/plural copy is accurate, no duplicate back controls appear, and disabled AI controls do not look broken. |

### Suite E — Mobile (`390×844`) & Accessibility
| ID | Title | Steps | Expected Result |
|---|---|---|---|
| `TC-16` | Mobile viewport layout & overflow (`390×844`) | Load landing, search, expanded swap + equipment check, and workout card at `390×844`. Check `scrollWidth <= innerWidth`. | Zero horizontal overflow and readable text across all primary views. |
| `TC-17` | Mobile touch targets (`≥ 44×44 px`) | Measure interactive links, buttons, switches, and radio controls at `390×844`. | All primary interactive controls meet `≥ 44×44 px` touch-target sizing and have accessible labels. |
| `TC-18` | Heading hierarchy (`h1`–`h3`) | Inspect DOM heading order on landing and after running a search. | Every view has one visible, descriptive `<h1>` before any `<h2>` subsections. |

## 7. Entry & Exit Criteria
- **Entry:** Live production deployment reachable at `https://gymswap.seeform.ai`; source suite baseline (`357` tests) green.
- **Exit:** All 18 test cases executed on Desktop and Mobile; every failure reproduced at least twice and documented with exact steps, expected/actual outcomes, and severity in [bug-reports.md](bug-reports.md).
