import {test , expect} from '@playwright/test';

test('Simple Test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  const heading = await page.locator('h1').textContent();
  await expect(heading).toBe('Example Domain');
  const link = await page.locator('a').getAttribute('href');
  await expect(link).toBe('https://www.iana.org/domains/example');
});

test("Clickin on element", async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html');
  const signinBtn = page.locator('#signin_button');
  await signinBtn.click();
  await page.click('text=Sign in');

  const errorMsg = await page.locator('.alert-error');
  await expect(errorMsg).toBeVisible();
  await expect(errorMsg).toHaveText('Login and/or password are wrong.');
});