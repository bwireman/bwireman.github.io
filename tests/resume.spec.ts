import { test, expect } from '@playwright/test';

test('test resume', async ({ page }) => {
    await page.goto('http://localhost:4173/dev.html');
    await expect(page.locator('#self-intro')).toBeVisible();

    const resumeUrl = await page.getByRole('link', { name: 'Resumé' }).getAttribute("href");
    expect(resumeUrl).toBeDefined()
    if (resumeUrl) {
        const resp = (await fetch(resumeUrl))
        expect(resp.status).toBe(200)
    }
});