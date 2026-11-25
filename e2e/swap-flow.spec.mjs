import { test, expect } from '@playwright/test';

// Helper: open Replace mode and pick Seated cable row to view its reviewed swaps
async function openSeatedCableRowSwaps(page) {
  await page.getByRole('button', { name: 'Replace an exercise' }).click();
  await page.getByRole('button', { name: /Seated cable row/i }).first().click();
  await expect(page.locator('.swap-card')).toBeVisible();
}

test.describe('Gym Swap E2E smoke suite (desktop + phone)', () => {
  test('E2E-01: loads cleanly with zero console/page errors and zero horizontal overflow', async ({ page }) => {
    const pageErrors = [];
    const consoleErrors = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/');

    // Primary mode controls render on initial load
    await expect(page.getByRole('button', { name: 'Browse exercises' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Replace an exercise' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Use a workout' })).toBeVisible();

    // No horizontal overflow on desktop (1280x800) or phone (390x844)
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(overflow).toBe(false);
    expect(pageErrors).toEqual([]);
    expect(consoleErrors).toEqual([]);
  });

  test('E2E-02: search handles exact matches, padded partial queries, and unsupported input safely', async ({ page }) => {
    const pageErrors = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    await page.goto('/');

    const searchBox = page.getByRole('combobox', { name: /Exercise, movement, or muscle/i });
    const searchBtn = page.getByRole('button', { name: 'Search', exact: true });

    // Exact exercise lookup
    await searchBox.fill('seated cable row');
    await searchBtn.click();
    await expect(page.getByRole('heading', { name: /Seated cable row/i }).first()).toBeVisible();

    // Return to search and verify padded partial query trims cleanly to Horizontal rowing
    await page.getByRole('button', { name: 'Change search' }).click();
    await searchBox.fill('  row  ');
    await searchBtn.click();
    await expect(page.getByRole('heading', { name: /Horizontal rowing/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Chest-supported dumbbell row/i })).toBeVisible();

    // Unsupported and XSS-like input returns safe no-match guidance without errors
    await page.getByRole('button', { name: 'Change search' }).click();
    await searchBox.fill('<script>alert(1)</script>');
    await searchBtn.click();
    await expect(page.getByText(/No reviewed match yet/i)).toBeVisible();
    expect(pageErrors).toEqual([]);
  });

  test('E2E-03: pick exercise, inspect reviewed swap tradeoffs, read expandable details, and confirm swap', async ({ page }) => {
    await page.goto('/');
    await openSeatedCableRowSwaps(page);

    const card = page.locator('.swap-card');
    await expect(card).toContainText('Keeps');
    await expect(card).toContainText('Changes');
    await expect(card).toContainText('Check');

    // Expand the first written detail section to read why/how
    const firstDetail = card.locator('details').filter({ visible: true }).first();
    await firstDetail.locator('summary').click();
    await expect(firstDetail).toHaveAttribute('open', '');

    // Confirm selecting the swap updates card state
    await page.getByRole('button', { name: 'Use this swap', exact: true }).click();
    await expect(page.getByRole('button', { name: /Undo/i }).first()).toBeVisible();
  });

  test('E2E-04: mark equipment busy, filter swaps by equipment, and undo equipment report', async ({ page }) => {
    await page.goto('/');
    await openSeatedCableRowSwaps(page);

    // Report dumbbells busy via the equipment note input
    await page.locator('#equipment-note').fill('two dumbbells busy');
    await page.getByRole('button', { name: 'Apply equipment note' }).click();
    await expect(page.locator('.equipment-note-facts')).toContainText(/busy/i);

    // Enable equipment filtering: dumbbell swap is excluded, leaving non-dumbbell swaps
    const filterToggle = page.locator('#equipment-filter');
    if (!(await filterToggle.isChecked())) {
      await filterToggle.check({ force: true });
    }
    await expect(filterToggle).toBeChecked();
    await expect(page.getByRole('button', { name: /Chest-supported dumbbell row/i })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /Seated band row/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Seated machine row/i })).toBeVisible();

    // Open a non-conflicting reviewed swap and confirm its tradeoff card renders
    await page.getByRole('button', { name: /Seated band row/i }).click();
    await expect(page.locator('.swap-card')).toContainText('Seated band row');
    await expect(page.locator('.swap-card')).toContainText('Keeps');

    // Undo clears the temporary equipment report cleanly
    await page.getByRole('button', { name: 'Undo equipment update' }).click();
    await expect(page.locator('.equipment-note-facts li')).toHaveCount(0);
  });

  test('E2E-05: favorites persist across reload while temporary equipment reports reset', async ({ page }) => {
    await page.goto('/');
    await openSeatedCableRowSwaps(page);

    // Save a favorite and record a temporary equipment note
    await page.getByRole('button', { name: 'Favorite', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Remove favorite', exact: true })).toBeVisible();

    await page.locator('#equipment-note').fill('Smith machine busy');
    await page.getByRole('button', { name: 'Apply equipment note' }).click();
    await expect(page.locator('.equipment-note-facts')).toContainText(/busy/i);

    // Reload: equipment state must reset, while Favorite persists in localStorage
    await page.reload();
    await expect(page.locator('#equipment-note')).toHaveValue('');
    await expect(page.locator('.equipment-note-facts li')).toHaveCount(0);

    await openSeatedCableRowSwaps(page);
    await expect(page.getByRole('button', { name: 'Remove favorite', exact: true })).toBeVisible();
  });

  test('E2E-06: saved workout resumes position after reload and About page links back to app', async ({ page }) => {
    await page.goto('/');

    // Create a two-exercise workout, advance to exercise 2, and reload
    await page.getByRole('button', { name: 'Use a workout' }).click();
    await page.getByRole('button', { name: 'New workout' }).first().click();
    await page.locator('#workout-title').fill('E2E Smoke Day');
    await page.locator('#workout-text').fill('Seated cable row — 3 x 10\nGoblet squat — 3 x 10');
    await page.getByRole('button', { name: 'Review exercises', exact: true }).click();
    await page.locator('[data-workout="use"]').filter({ visible: true }).first().click();

    await expect(page.locator('#workout-workspace')).toContainText(/Exercise 1 of 2/i);
    await page.getByRole('button', { name: 'Keep original', exact: true }).click();
    await page.locator('[data-workout="next"]').filter({ visible: true }).first().click();
    await expect(page.locator('#workout-workspace')).toContainText(/Exercise 2 of 2/i);

    await page.reload();
    await page.getByRole('button', { name: /Resume E2E Smoke Day/i }).click();
    await expect(page.locator('#workout-workspace')).toContainText(/Exercise 2 of 2/i);

    // Verify About page renders and navigates back cleanly
    await page.goto('/about/');
    await expect(page.locator('main')).toContainText(/Professional guidance/i);
    await page.getByRole('link', { name: 'Return to app', exact: true }).first().click();
    await expect(page.getByRole('button', { name: 'Replace an exercise' })).toBeVisible();
  });
});
