# Gym Swap — Reproducible Bug Reports

All 7 defects below were reproduced live on `https://gymswap.seeform.ai` (Build `2.8.1`) on 2026-11-24. Matching Jira Cloud import rows are in [jira-import.csv](jira-import.csv).

---

## GS-1: Workout importer silently merges unmatched and typo lines into the previous exercise's notes
- **Type:** Bug · **Severity:** High · **Priority:** P1
- **Environment:** Desktop (`1280×800`) and Mobile (`390×844`), Chromium · **Build:** `2.8.1`
- **Component:** Workout Importer (`Use a workout`) · **Labels:** `workout-flow`, `parser`, `data-loss`

**Steps to Reproduce**
1. Open `https://gymswap.seeform.ai/` and select `Use a workout` → `New workout`.
2. Enter workout name `QA Messy Workout` and paste the following 5 numbered lines:
   ```text
   1. Seated Cable Row 3x10
   2. Machine Chest Press 3x8
   3. Burpees 3x15

   4. Goblet Squat 4x10
   5. Lat Puldown 3x12
   ```
3. Click `Review exercises`.

**Expected Result**
Consistent with the form helper (`"Any unresolved entries stay as written."`), all 5 numbered items should appear as separate exercises during review, with `3. Burpees 3x15` and `5. Lat Puldown 3x12` shown as standalone unresolved entries so the user can edit or match them.

**Actual Result**
Only 3 exercises are created (`Seated Cable Row`, `Machine Chest Press`, `Goblet Squat`). `3. Burpees 3x15` is appended into Exercise 2's `Original workout notes` (`"3x8\n3. Burpees 3x15"`), and `5. Lat Puldown 3x12` is appended into Exercise 3's `Original workout notes` (`"4x10\n5. Lat Puldown 3x12"`).

**Triage Note**
Treat numbered lines (or lines separated by blank lines / containing set-rep patterns like `3x15`) as new exercise boundaries rather than continuation notes when no library alias matches.

---

## GS-2: Hiding a favorited swap permanently clears its Favorite state after restore
- **Type:** Bug · **Severity:** Medium · **Priority:** P2
- **Environment:** Desktop (`1280×800`) and Mobile (`390×844`), Chromium · **Build:** `2.8.1`
- **Component:** Preferences & Persistence · **Labels:** `preferences`, `localstorage`, `state`

**Steps to Reproduce**
1. Open `Replace an exercise`, search `Seated cable row`, and view `Chest-supported dumbbell row`.
2. Click `Favorite` (button updates to `Remove favorite`).
3. Click `More options` → `Hide this exercise`.
4. Open `Menu` → `Exercise preferences`.
5. Check the `Favorites` section, then click `Restore` on `Chest-supported dumbbell row` and reload the page.

**Expected Result**
Favoriting and hiding should remain independent preferences, or restoring a previously favorited exercise should return it to `Favorite` (`Remove favorite` active).

**Actual Result**
While hidden, `Favorites` shows `"None yet."`. After clicking `Restore` and reloading, `Chest-supported dumbbell row` reverts to unfavorited (`Favorite`), while another favorited exercise that was never hidden (`Seated band row`) persists as `Remove favorite`.

**Triage Note**
Preserve `favoriteIds` when toggling `hiddenIds` in `preferences.mjs` (filter hidden cards out of displayed suggestions without mutating `favoriteIds`).

---

## GS-3: "View original exercise" opens Browse UI while leaving "Replace an exercise" tab pressed
- **Type:** Bug · **Severity:** Medium · **Priority:** P2
- **Environment:** Desktop (`1280×800`) and Mobile (`390×844`), Chromium · **Build:** `2.8.1`
- **Component:** Swap Flow & Mode Navigation · **Labels:** `navigation`, `swap-flow`, `ux`

**Steps to Reproduce**
1. Click `Replace an exercise`, search `Seated cable row`, and open `Chest-supported dumbbell row`.
2. Click `View original exercise: Seated cable row`.

**Expected Result**
Either display the original exercise details inline/in a drawer with a direct `Back to swaps` control, or switch the active mode button to `Browse exercises` so the navigation bar matches the rendered view.

**Actual Result**
The page transitions to the `Explore exercise` (Browse) layout for `Seated cable row` (`Change search`, `See similar exercises`, `Explore another exercise`) and drops the swap comparison context, while the top mode bar still marks `Replace an exercise` as `[pressed]`.

**Triage Note**
Keep original-exercise viewing inside an expandable section/sub-view of Replace mode (or sync the active mode button state when switching views).

---

## GS-4: Inverted heading hierarchy on landing (`h2` before `h1`) and empty `h1` after search
- **Type:** Bug · **Severity:** Medium · **Priority:** P2
- **Environment:** Desktop (`1280×800`) and Mobile (`390×844`), Chromium · **Build:** `2.8.1`
- **Component:** Accessibility (`a11y`) · **Labels:** `accessibility`, `wcag`, `headings`

**Steps to Reproduce**
1. Load `https://gymswap.seeform.ai/` and inspect `h1` and `h2` elements in DOM order.
2. Search `"seated cable row"` in `Browse exercises` or `Replace an exercise` and inspect `h1` and `h2` again.

**Expected Result**
Every view should expose a single visible, descriptive `<h1>` before any `<h2>` subsection headings (WCAG 1.3.1 / 2.4.6).

**Actual Result**
- On landing, `<h2>Equipment for this visit Optional</h2>` renders above `<h1>Explore exercises</h1>`.
- After running a search, the `<h1>` element remains in the DOM with empty text (`""`, hidden), while visible headings start at `<h2>` (`Equipment for this visit Optional`, `Chest-supported dumbbell row`).

**Triage Note**
Place a persistent visible `<h1>` at the top of `<main>` that reflects the active mode or viewed exercise, and keep the optional equipment panel at `<h2>` beneath it.

---

## GS-5: Inconsistent equipment status labels across controls, and "Use this swap" stays enabled when marked "In use"
- **Type:** Bug · **Severity:** Medium · **Priority:** P2
- **Environment:** Desktop (`1280×800`) and Mobile (`390×844`), Chromium · **Build:** `2.8.1`
- **Component:** Equipment Readiness & Swap Selection · **Labels:** `equipment`, `swap-flow`, `ux`

**Steps to Reproduce**
1. Open `Replace an exercise` → `Seated cable row` → `Chest-supported dumbbell row`.
2. Expand `Check equipment Optional`.
3. Compare option labels in the quick dropdown (`For this candidate: Suitable dumbbell pair`) against the panel dropdown (`Suitable dumbbell pair`).
4. Set `Suitable dumbbell pair` to `This setup is in use`, then click `Use this swap`.

**Expected Result**
Both controls for the same equipment item should share identical status labels. When required equipment is marked `"In use"`, `Use this swap` should be disabled or require explicit confirmation rather than silently accepting a conflicted swap, and confirmation should show a single Undo action.

**Actual Result**
The two dropdowns use different copy (`"Not checked" / "Complete named setup available now" / "In use"` vs. `"Not sure" / "Available now" / "This setup is in use"`). Although the card flags `"Equipment in use"` and `"This candidate has an equipment conflict"`, `Use this swap` remains enabled, confirms the swap on click, and displays two separate undo buttons (`Undo` and `Undo selection`).

**Triage Note**
Share one option-label map across both equipment controls, gate or warn on `"In use"` selection, and consolidate the duplicate Undo buttons.

---

## GS-6: Mobile touch targets below 44×44 px and unlabeled equipment filter inputs (`390×844`)
- **Type:** Bug · **Severity:** Medium · **Priority:** P3
- **Environment:** Mobile (`390×844`), Chromium · **Build:** `2.8.1`
- **Component:** Mobile UI & Accessibility · **Labels:** `mobile`, `accessibility`, `touch-targets`

**Steps to Reproduce**
1. Load `https://gymswap.seeform.ai/` at a `390×844` viewport.
2. Open `Replace an exercise` → `Seated cable row` → `Chest-supported dumbbell row` and expand `Check equipment Optional`.
3. Measure visible interactive element bounding boxes and accessible input names in DevTools.

**Expected Result**
Interactive mobile links and controls should provide at least `44×44 px` tap area (WCAG 2.5.5), and every `<input>` control should have an explicit associated label.

**Actual Result**
- Top demo nav links measure `22.5 px` tall: `Standard app` (`88.6×22.5 px`), `Six-row pilot` (`83.4×22.5 px`), `About` (`40.9×22.5 px`, below 44 px in both axes), and `GitHub ↗` (`62.1×22.5 px`).
- The inline source link (`NSCA: Teaching resistance-training movement patterns`) measures `39.1 px` tall.
- `#equipment-filter` switch `<input>` (`19.2×19.2 px`) and expanded bench radio `<input>`s (`16×16 px`) lack direct accessible labels on the `<input>` elements.

**Triage Note**
Add vertical padding (`min-height: 44px; min-width: 44px`) to mobile nav links and associate `<label for="...">` or `aria-label` directly on the filter switch and radio inputs.

---

## GS-7: UI copy and control polish ("1 alternatives", wrong mode button label, duplicate back control, missing Search Clear)
- **Type:** Bug · **Severity:** Low · **Priority:** P3
- **Environment:** Desktop (`1280×800`) and Mobile (`390×844`), Chromium · **Build:** `2.8.1`
- **Component:** UI Copy & Controls · **Labels:** `ui-polish`, `copy`, `search`

**Steps to Reproduce**
1. Open `Replace an exercise` and inspect `Leg press` and `Hip-thrust machine` in `Choose the exercise to replace`.
2. Open `Seated cable row` → `See other swaps` and scroll to the bottom action button.
3. Open `Use a workout` → open any exercise → click `See alternatives`.
4. In `Browse exercises`, type `row`, click `Search`, then press `Escape` and look for a Clear button.

**Expected Result**
- Singular count reads `"1 alternative"`.
- Replace mode bottom button reads `"Swap another exercise"`.
- Only one `"Back to workout entry"` control appears in `See alternatives`.
- Search input offers a Clear button or clears on `Escape`.

**Actual Result**
- List badges read `"Leg press 1 alternatives"` and `"Hip-thrust machine 1 alternatives"`.
- `"Swaps for Seated cable row"` renders `"Explore another exercise"` at the bottom.
- Two stacked `"Back to workout entry"` controls appear (one button inside the card, one link directly above `"Swaps for Seated cable row"`).
- Search input has no Clear button and pressing `Escape` leaves `"row"` unchanged. (Additionally, in `Ask about this swap`, prompt chips like `Torso support` remain clickable even when live AI is disabled, returning only a generic disabled notice.)

**Triage Note**
Fix singular/plural formatting, align the bottom CTA with the active mode, remove the duplicate back link, add a clear action to search inputs, and disable or hide AI prompt chips when live AI is off.
