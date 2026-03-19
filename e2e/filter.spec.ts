import { test, expect } from '@playwright/test';

// ── Tag filtering ─────────────────────────────────────────────────────────────

test.describe('tag filter', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('loading page with ?tags= param applies filter', async ({ page }) => {
    await page.goto('/?tags=css');
    const articles = page.locator('article');
    for (const article of await articles.all()) {
      await expect(article.getByText('#css', { exact: true })).toBeVisible();
    }
  });

  test('clear all removes filter and restores all articles', async ({
    page,
  }) => {
    await page.goto('/?tags=css');
    const filtered = await page.locator('article').count();
    await page.getByRole('button', { name: 'Clear' }).first().click();
    const restored = await page.locator('article').count();
    expect(restored).toBeGreaterThan(filtered);
    await expect(page).not.toHaveURL(/tags=/);
  });
});

// ── Date filter ───────────────────────────────────────────────────────────────

test.describe('date filter', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('loading page with ?date= param applies date filter', async ({
    page,
  }) => {
    await page.goto('/?date=2026-03-16');
    await expect(page.locator('article').first()).toBeVisible();
  });
});

// ── Mobile filter modal ───────────────────────────────────────────────────────

test.describe('mobile filter modal', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('filter button visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('button', { name: /filters/i }).first(),
    ).toBeVisible();
  });

  test('filter button opens modal', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /filters/i })
      .first()
      .click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByRole('dialog').getByText('Tags')).toBeVisible();
    await expect(page.getByRole('dialog').getByText('Date')).toBeVisible();
  });

  test('selecting tag inside modal filters articles and updates URL', async ({
    page,
  }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /filters/i })
      .first()
      .click();
    await page
      .getByRole('dialog')
      .getByText('css', { exact: true })
      .first()
      .click();
    await expect(page).toHaveURL(/tags=.*css/);
  });

  test('close button dismisses modal', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /filters/i })
      .first()
      .click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page
      .getByRole('dialog')
      .getByRole('button', { name: /close/i })
      .click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('backdrop click dismisses modal', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /filters/i })
      .first()
      .click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.mouse.click(5, 5); // Click far outside modal panel
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('filter count badge shows active filter count', async ({ page }) => {
    await page.goto('/?tags=css');
    // Badge should show "1" on the Filters button
    const badge = page.locator('.bg-dw-accent').first();
    await expect(badge).toBeVisible();
    await expect(badge).toHaveText('1');
  });

  test('filter count increments for tag + date', async ({ page }) => {
    await page.goto('/?tags=css&date=2026-03-06');
    const badge = page.locator('.bg-dw-accent').first();
    await expect(badge).toHaveText('2');
  });
});

// ── Persistence ───────────────────────────────────────────────────────────────

test.describe('filter persistence', () => {
  test('URL params take priority over localStorage', async ({ page }) => {
    // Pre-seed localStorage with a different filter
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem(
        'dw:filter',
        JSON.stringify({ tags: ['javascript'], date: null }),
      );
    });
    // Navigate with css in URL — should override LS
    await page.goto('/?tags=css');
    await expect(page).toHaveURL(/tags=css/);
    await expect(page).not.toHaveURL(/javascript/);
  });

  test('clearing filter removes localStorage entry', async ({ page }) => {
    await page.goto('/?tags=css');
    await page.getByRole('button', { name: 'Clear' }).first().click();
    const stored = await page.evaluate(() => localStorage.getItem('dw:filter'));
    expect(stored).toBeNull();
  });
});

// ── No results state ──────────────────────────────────────────────────────────

test.describe('empty state', () => {
  test('shows message when no articles match combined filters', async ({
    page,
  }) => {
    // Use a nonexistent tag to force empty state
    await page.goto('/?tags=nonexistent-tag-xyz-123');
    await expect(page.getByText(/no articles match/i)).toBeVisible();
    await expect(page.locator('article')).toHaveCount(0);
  });
});
