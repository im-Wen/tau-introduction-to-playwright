import { test, expect } from '@playwright/test';

test('verify page title', async ({ page }) => {
  // Go to website
  await page.goto('https://playwright.dev/');

  // Check title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

test('check get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click Get Started button
  await page.getByRole('link', { name: 'Get started' }).click();

  // Check URL includes intro
  await expect(page).toHaveURL(/.*intro/);
});
