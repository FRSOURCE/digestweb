import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ARTICLE_SLUG = '/articles/2026-03-06/css-anchor-positioning';

test.describe('accessibility — home page', () => {
  test('no axe violations', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('article').first()).toBeVisible();
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(violations).toEqual([]);
  });
});

test.describe('accessibility — article detail', () => {
  test('no axe violations', async ({ page }) => {
    await page.goto(ARTICLE_SLUG);
    await expect(page.locator('main h1')).toBeVisible();
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(violations).toEqual([]);
  });
});

test.describe('accessibility — filter modal', () => {
  test.use({
    isMobile: true,
    hasTouch: true,
    viewport: { width: 390, height: 844 },
  });

  test('no axe violations with filter modal open', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /filters/i }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveCSS('opacity', '1');
    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .include('[role="dialog"]')
      .analyze();
    expect(violations).toEqual([]);
  });
});
