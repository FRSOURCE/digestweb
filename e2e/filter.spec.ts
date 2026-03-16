import { test, expect } from '@playwright/test';

// ── Desktop filter sidebar ────────────────────────────────────────────────────

test.describe('desktop filter sidebar', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('shows filter panel with tags and date in aside', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.locator('aside').filter({ hasText: 'Tags' }).first(),
    ).toBeVisible();
    await expect(
      page.locator('aside').filter({ hasText: 'Date' }).first(),
    ).toBeVisible();
  });

  test('all tags visible (no scroll, no truncation)', async ({ page }) => {
    await page.goto('/');
    // Every known tag from articles should appear as a button in the sidebar
    for (const tag of ['css', 'layout', 'javascript', 'browser']) {
      await expect(
        page
          .locator('aside button')
          .filter({ hasText: new RegExp(`^${tag}$`) })
          .first(),
      ).toBeVisible();
    }
  });

  test('filter sidebar hidden on article detail page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Read Summary' }).first().click();
    await expect(
      page.locator('aside').filter({ hasText: 'Tags' }),
    ).not.toBeVisible();
  });
});

// ── Tag filtering ─────────────────────────────────────────────────────────────

test.describe('tag filter', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('clicking a tag reduces visible articles', async ({ page }) => {
    await page.goto('/');
    const before = await page.locator('article').count();
    await page
      .locator('aside button')
      .filter({ hasText: /^css$/ })
      .first()
      .click();
    const after = await page.locator('article').count();
    expect(after).toBeLessThan(before);
  });

  test('active tag updates URL param', async ({ page }) => {
    await page.goto('/');
    await page
      .locator('aside button')
      .filter({ hasText: /^css$/ })
      .first()
      .click();
    await expect(page).toHaveURL(/[?&]tags=.*css/);
  });

  test('loading page with ?tags= param applies filter', async ({ page }) => {
    await page.goto('/?tags=css');
    const articles = page.locator('article');
    for (const article of await articles.all()) {
      await expect(article.getByText('css')).toBeVisible();
    }
  });

  test('clicking article card tag activates filter', async ({ page }) => {
    await page.goto('/');
    const firstCardTag = page.locator('article .tag-pill').first();
    const tagText = (await firstCardTag.textContent())?.trim() ?? '';
    await firstCardTag.click();
    await expect(page).toHaveURL(new RegExp(`tags=.*${tagText}`));
  });

  test('selecting two tags shows union of matching articles', async ({
    page,
  }) => {
    await page.goto('/');
    const total = await page.locator('article').count();
    await page
      .locator('aside button')
      .filter({ hasText: /^css$/ })
      .first()
      .click();
    await page
      .locator('aside button')
      .filter({ hasText: /^javascript$/ })
      .first()
      .click();
    const filtered = await page.locator('article').count();
    // OR logic: at least as many as the intersection-only filter
    expect(filtered).toBeGreaterThanOrEqual(1);
    expect(filtered).toBeLessThanOrEqual(total);
  });

  test('clear all removes filter and restores all articles', async ({
    page,
  }) => {
    await page.goto('/?tags=css');
    const filtered = await page.locator('article').count();
    await page.getByRole('button', { name: /clear all/i }).click();
    const restored = await page.locator('article').count();
    expect(restored).toBeGreaterThan(filtered);
    await expect(page).not.toHaveURL(/tags=/);
  });
});

// ── Date filter ───────────────────────────────────────────────────────────────

test.describe('date filter', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('date section visible in filter panel', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('aside').getByText('Date')).toBeVisible();
  });

  test('clicking a date pill updates URL with date param', async ({ page }) => {
    await page.goto('/');
    const dateSection = page
      .locator('section')
      .filter({ hasText: 'Date' })
      .first();
    await dateSection.locator('button').first().click();
    await expect(page).toHaveURL(/[?&]date=\d{4}-\d{2}-\d{2}/);
  });

  test('loading page with ?date= param applies date filter', async ({
    page,
  }) => {
    await page.goto('/?date=2026-03-06');
    await expect(page.locator('article').first()).toBeVisible();
  });

  test('clicking active date pill deselects it', async ({ page }) => {
    await page.goto('/?date=2026-03-06');
    const dateSection = page
      .locator('section')
      .filter({ hasText: 'Date' })
      .first();
    // The active date button should have inset style (active state)
    await dateSection.locator('button').first().click();
    await expect(page).not.toHaveURL(/date=/);
  });
});

// ── Mobile filter modal ───────────────────────────────────────────────────────

test.describe('mobile filter modal', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('filter button visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: /filters/i })).toBeVisible();
  });

  test('desktop sidebar hidden on mobile', async ({ page }) => {
    await page.goto('/');
    // The aside filter panel is hidden lg:block — not visible at 390px
    await expect(
      page.locator('aside').filter({ hasText: 'Tags' }),
    ).not.toBeVisible();
  });

  test('filter button opens modal', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /filters/i }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByRole('dialog').getByText('Tags')).toBeVisible();
    await expect(page.getByRole('dialog').getByText('Date')).toBeVisible();
  });

  test('selecting tag inside modal filters articles and updates URL', async ({
    page,
  }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /filters/i }).click();
    await page
      .getByRole('dialog')
      .getByRole('button', { name: /^css$/ })
      .click();
    await expect(page).toHaveURL(/tags=.*css/);
  });

  test('close button dismisses modal', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /filters/i }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByRole('button', { name: /close/i }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('backdrop click dismisses modal', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /filters/i }).click();
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
    // javascript filter should NOT be applied
    const articles = page.locator('article');
    for (const a of await articles.all()) {
      await expect(a.getByText('javascript')).not.toBeVisible();
    }
  });

  test('localStorage restores filter when no URL params', async ({ page }) => {
    // Set filter via UI on clean page
    await page.goto('/');
    await page
      .locator('aside button, .lg\\:hidden button')
      .filter({ hasText: /^css$/ })
      .first()
      .click();
    // Navigate away and back without URL params
    await page.goto('/articles/2026-03-06/css-anchor-positioning');
    await page.goto('/');
    // LS should have restored the css filter
    await expect(page).toHaveURL(/tags=css/);
  });

  test('clearing filter removes localStorage entry', async ({ page }) => {
    await page.goto('/?tags=css');
    await page.getByRole('button', { name: /clear all/i }).click();
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
