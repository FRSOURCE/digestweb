import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ARTICLE_SLUG = '/articles/2026-03-18/nextjs-16-2-adapters-ai-turbopack';

// ── Dark mode toggle — desktop ─────────────────────────────────────────────

test.describe('dark mode toggle — desktop', () => {
  test.use({
    isMobile: false,
    hasTouch: false,
    viewport: { width: 1280, height: 900 },
    colorScheme: 'light',
  });

  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
  });

  test('theme toggle button is visible in desktop nav', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('button', { name: /switch to dark mode/i }).first(),
    ).toBeVisible();
  });

  test('clicking toggle switches to dark mode', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .first()
      .click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('clicking toggle again switches back to light mode', async ({
    page,
  }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .first()
      .click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await page
      .getByRole('button', { name: /switch to light mode/i })
      .first()
      .click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('dark mode preference persists after page reload', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .first()
      .click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('preference is stored under vitepress-theme-appearance', async ({
    page,
  }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .first()
      .click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    const stored = await page.evaluate(() =>
      localStorage.getItem('vitepress-theme-appearance'),
    );
    expect(stored).toBe('dark');
  });
});

// ── Dark mode toggle — mobile ──────────────────────────────────────────────

test.describe('dark mode toggle — mobile', () => {
  test.use({
    viewport: { width: 390, height: 844 },
    colorScheme: 'light',
  });

  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
  });

  test('theme toggle button is visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('button', { name: /switch to dark mode/i }).first(),
    ).toBeVisible();
  });

  test('mobile toggle switches to dark mode', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('button', { name: /switch to dark mode/i })
      .first()
      .click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});

// ── Accessibility — dark mode ──────────────────────────────────────────────

test.describe('accessibility — dark mode home page', () => {
  test.use({ colorScheme: 'dark' });

  test('no axe violations in dark mode', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('article').first()).toBeVisible();
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(violations).toEqual([]);
  });
});

test.describe('accessibility — dark mode article detail', () => {
  test.use({ colorScheme: 'dark' });

  test('no axe violations in dark mode', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.locator('main h1')).toBeVisible();
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(violations).toEqual([]);
  });
});
