import { test, expect, type Page } from '@playwright/test';

const API_URL = '**/script.google.com/**';
const TURNSTILE_URL = '**/challenges.cloudflare.com/**';

const SERVER_ERROR =
  'Server error, please try again later or contact the administration at digestweb@frsource.org.';

async function fillValidForm(page: Page) {
  await page.fill('#ss-name', 'Vue.js Blog');
  await page.selectOption('#ss-category', 'general');
  await page.fill('#ss-home-url', 'https://example.com');
  await page.fill('#ss-feed-url', 'https://example.com/feed.xml');
}

function mockApiError(page: Page, errors: string[]) {
  return page.route(API_URL, (route) =>
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({ result: 'error', error: errors }),
    }),
  );
}

test.describe('submit page — error handling', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(TURNSTILE_URL, (route) => route.abort());
    await page.goto('/submit');
  });

  // ── Known error code mappings ──────────────────────────────────────────────

  const knownErrors: [string, string][] = [
    ['name_required', 'Source name is required.'],
    ['category_required', 'Category is required.'],
    ['homeUrl_required', 'Home URL is required.'],
    ['feed_required', 'Feed URL is required.'],
    ['homeUrl_syntax_error', 'Home URL is not a valid URL.'],
    ['feed_syntax_error', 'Feed URL is not a valid URL.'],
    ['email_syntax_error', 'Email address is not valid.'],
  ];

  for (const [code, message] of knownErrors) {
    test(`maps error code "${code}" to human-readable message`, async ({
      page,
    }) => {
      await mockApiError(page, [code]);
      await fillValidForm(page);
      await page.getByRole('button', { name: /submit source/i }).click();

      const alert = page.getByRole('alert');
      await expect(alert).toBeVisible();
      await expect(alert).toContainText(message);
    });
  }

  // ── Multiple errors ────────────────────────────────────────────────────────

  test('renders multiple errors as a list', async ({ page }) => {
    await mockApiError(page, ['name_required', 'category_required']);
    await fillValidForm(page);
    await page.getByRole('button', { name: /submit source/i }).click();

    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert.locator('li')).toHaveCount(2);
    await expect(alert).toContainText('Source name is required.');
    await expect(alert).toContainText('Category is required.');
  });

  // ── Unknown / server errors ────────────────────────────────────────────────

  test('shows generic server error for unknown error code', async ({
    page,
  }) => {
    await mockApiError(page, ['github_error']);
    await fillValidForm(page);
    await page.getByRole('button', { name: /submit source/i }).click();

    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert).toContainText(SERVER_ERROR);
  });

  test('maps known codes and falls back to server error for unknown ones', async ({
    page,
  }) => {
    await mockApiError(page, ['name_required', 'github_error']);
    await fillValidForm(page);
    await page.getByRole('button', { name: /submit source/i }).click();

    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert.locator('li')).toHaveCount(2);
    await expect(alert).toContainText('Source name is required.');
    await expect(alert).toContainText(SERVER_ERROR);
  });

  test('shows generic server error on network failure', async ({ page }) => {
    await page.route(API_URL, (route) => route.abort());
    await fillValidForm(page);
    await page.getByRole('button', { name: /submit source/i }).click();

    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert).toContainText(SERVER_ERROR);
  });

  // ── Success ────────────────────────────────────────────────────────────────

  test('shows success state on successful submission', async ({ page }) => {
    await page.route(API_URL, (route) =>
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({ result: 'success' }),
      }),
    );
    await fillValidForm(page);
    await page.getByRole('button', { name: /submit source/i }).click();

    await expect(
      page.getByRole('heading', { name: /source submitted/i }),
    ).toBeVisible();
    await expect(page.locator('form')).not.toBeVisible();
  });
});
