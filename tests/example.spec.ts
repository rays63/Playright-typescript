import {test , expect} from '@playwright/test';

test('Simple Test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  await expect(title).toBe('Example Domain');
  const heading = await page.locator('h1').textContent();
  await expect(heading).toBe('Example Domain');
  const link = await page.locator('a').getAttribute('href');
  await expect(link).toBe('https://www.iana.org/domains/example');
});