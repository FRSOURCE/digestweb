import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    const originalGoto = page.goto;
    page.goto = async (url, ...args) => {
      const res = await originalGoto.call(page, url, ...args);
      // wait for Vue hydration
      await page.waitForFunction(
        () =>
          !!(
            document.querySelector('#app') as unknown as {
              __vue_app__: unknown;
            }
          )?.__vue_app__,
      );
      return res;
    };
    await use(page);
  },
});
