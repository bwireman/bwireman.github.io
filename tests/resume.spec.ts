import { test, expect } from '@playwright/test';

test('test resume', async ({ page }) => {
    await page.goto('http://localhost:4173/dev.html');
    await expect(page.locator('#self-intro')).toBeVisible();

    const resumePagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Resumé' }).click();
    await resumePagePromise.catch(() => { test.fail() });
});