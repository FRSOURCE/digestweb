import { defineConfig, devices } from '@playwright/test';

const CI = !!process.env.CI;
const PORT = CI ? 4173 : 5173;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 2 : 0,
  reporter: CI ? 'github' : 'html',
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: CI ? 'pnpm build && pnpm preview' : 'pnpm dev',
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !CI,
  },
});
