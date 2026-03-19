import { test, expect } from '@playwright/test';

const ARTICLE_SLUG = '/articles/2026-03-18/nextjs-16-2-adapters-ai-turbopack';

// ── Home page ─────────────────────────────────────────────────────────────────

test.describe('home page', () => {
  test('renders site title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('digestweb');
  });

  test('renders at least one article card', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('article').first()).toBeVisible();
  });

  test('article card shows Read Summary and View Original buttons', async ({
    page,
  }) => {
    await page.goto('/');
    const card = page.locator('article').first();
    await expect(
      card.getByRole('link', { name: 'Read Summary' }),
    ).toBeVisible();
    await expect(
      card.getByRole('link', { name: 'View Original Article' }),
    ).toBeVisible();
  });
});

test.describe('home page — desktop', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('article card photo is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('article img').first()).toBeVisible();
  });
});

// ── Navigation ────────────────────────────────────────────────────────────────

test.describe('navigation — desktop', () => {
  test.use({
    isMobile: false,
    hasTouch: false,
    viewport: { width: 1280, height: 900 },
  });

  test('logo is visible', async ({ page }) => {
    await page.goto('/');
    await expect(
      page
        .locator('header')
        .first()
        .getByRole('link', { name: /digestweb/i }),
    ).toBeVisible();
  });

  test('Daily Feed nav link is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Daily Feed' })).toBeVisible();
  });

  test('FRSOURCE curated-by link is visible', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('link', { name: /frsource/i }).first(),
    ).toBeVisible();
  });
});

test.describe('navigation — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('hamburger button is visible', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('button', { name: /toggle navigation/i }),
    ).toBeVisible();
  });

  test('hamburger opens mobile menu with nav items', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /toggle navigation/i }).click();
    await expect(page.getByRole('link', { name: 'Daily Feed' })).toBeVisible();
    const rssLink = page.getByRole('link', { name: 'RSS' });
    await expect(rssLink).toBeVisible();
    await expect(rssLink).toHaveAttribute('href', '/feed.rss');
  });

  test('tapping a nav item closes the mobile menu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /toggle navigation/i }).click();
    await expect(page.getByRole('link', { name: 'Daily Feed' })).toBeVisible();
    await page.getByRole('link', { name: 'Daily Feed' }).click();
    await expect(
      page.getByRole('link', { name: /submit link/i }),
    ).not.toBeVisible();
  });
});

// ── Article detail page ───────────────────────────────────────────────────────

test.describe('article detail page', () => {
  test('navigates to detail page from Read Summary', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Read Summary' }).first().click();
    await expect(page).toHaveURL(/\/articles\//);
    await expect(page.locator('main h1')).toBeVisible();
  });

  test('direct URL loads correctly', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.locator('main h1')).toBeVisible();
  });

  test('back link returns to home', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(
      page.getByRole('link', { name: /back to daily feed/i }),
    ).toBeVisible();
    await page.getByRole('link', { name: /back to daily feed/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('article cover photo is shown', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.locator('img').first()).toBeVisible();
  });

  test('View Original Article button is present and external', async ({
    page,
  }) => {
    await page.goto(ARTICLE_SLUG);
    const link = page
      .getByRole('link', { name: 'View Original Article' })
      .first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener/);
  });

  test('attribution line is visible', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.getByText(/originally published on/i)).toBeVisible();
  });

  test('article summary prose is rendered', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.locator('.dw-prose')).toBeVisible();
    const text = await page.locator('.dw-prose').textContent();
    expect(text?.trim().length ?? 0).toBeGreaterThan(10);
  });
});

// ── Share box ─────────────────────────────────────────────────────────────────

test.describe('share box — desktop', () => {
  test.use({
    isMobile: false,
    hasTouch: false,
    viewport: { width: 1280, height: 900 },
  });

  test('Share on X link is present on article detail', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.getByTitle('Share on X').first()).toBeVisible();
  });

  test('Share on LinkedIn link is present on article detail', async ({
    page,
  }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.getByTitle('Share on LinkedIn').first()).toBeVisible();
  });

  test('copy link button is present on article detail', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.getByTitle(/copy link/i).first()).toBeVisible();
  });

  test('share buttons are also visible on article cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTitle('Share on X').first()).toBeVisible();
  });
});

test.describe('share box — mobile', () => {
  test.use({
    isMobile: true,
    hasTouch: true,
    viewport: { width: 390, height: 844 },
  });

  test('Share button is visible on article detail page', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(
      page.getByRole('button', { name: /^share:/i }).first(),
    ).toBeVisible();
  });
});

// ── Floating ad ───────────────────────────────────────────────────────────────

test.describe('floating ad — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('ad is visible on first visit', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('complementary')).toBeVisible();
    await expect(
      page.getByRole('complementary').getByText(/advertisement/i),
    ).toBeVisible();
  });

  test('close button dismisses the ad', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('complementary')).toBeVisible();
    await page.getByRole('button', { name: /close ad/i }).click();
    await expect(page.getByRole('complementary')).not.toBeVisible();
  });

  test('dismissed ad stays hidden after reload', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /close ad/i }).click();
    await page.reload();
    await expect(page.getByRole('complementary')).not.toBeVisible();
  });

  test('sessionStorage key is set after dismiss', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /close ad/i }).click();
    const value = await page.evaluate(() =>
      sessionStorage.getItem('dw:ad-dismissed'),
    );
    expect(value).toBe('1');
  });
});
