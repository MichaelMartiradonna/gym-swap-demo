import { defineConfig } from '@playwright/test';

const externalUrl = process.env.E2E_BASE_URL;
const baseURL = externalUrl || 'http://127.0.0.1:50790';

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  expect: {
    timeout: 8_000,
  },
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 800 },
      },
    },
    {
      name: 'mobile-chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  // Start the static preview of dist/ unless testing an already-hosted URL via E2E_BASE_URL.
  webServer: externalUrl
    ? undefined
    : {
        command: 'node scripts/preview.mjs 50790',
        url: 'http://127.0.0.1:50790/',
        reuseExistingServer: !process.env.CI,
        timeout: 30_000,
      },
});
