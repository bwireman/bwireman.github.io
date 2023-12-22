import { test, expect } from '@playwright/test';

test('test snippet showing', async ({ page }) => {
  await page.goto('http://localhost:4173/dev.html');
  await expect(page.locator('#self-intro')).toBeVisible();

  await page.locator('#dreamy-toggle-snippet').click();
  await expect(page.locator('#dreamy-snippet')).toBeVisible();

  await page.locator('#censys_ex-toggle-snippet').click();
  await expect(page.locator('#censys_ex-snippet')).toBeVisible();
  await expect(page.locator('#dreamy-snippet')).toBeVisible({visible: false});

  await page.locator('#dreamy-toggle-snippet').click();
  await expect(page.locator('#dreamy-snippet')).toBeVisible();
  await expect(page.locator('#censys_ex-snippet')).toBeVisible({visible: false});

  await page.locator('#dreamy-toggle-snippet').click();
  await expect(page.locator('#dreamy-snippet')).toBeVisible({visible: false});
});