import { test, expect } from '@playwright/test';

test('test links', async ({ page }) => {
    await page.goto('http://localhost:4173/dev.html');
    await expect(page.locator('#self-intro')).toBeVisible();

    for (const li of await page.locator('a').all()) {
        const target = await li.getAttribute("target");
        if ((await li.getAttribute('data-testid')) !== 'snippet') {
            expect(target).toBeDefined()
            expect(target).toBe("_blank")
        }
    }
});