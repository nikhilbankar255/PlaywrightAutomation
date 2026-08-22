import { test, expect, firefox } from "@playwright/test"

//approach 1
test("@sanity @regression test1", async ({ page }) => {

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

//approach 2 - preferred
test("test2", { tag: '@sanity' }, async ({ page }) => {

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

test('test3', { tag: ['@sanity', '@regression'] }, async ({ page }) => {
    await page.locator('body').click();
    await page.locator('body').click();
    await page.locator('body').click();
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavano1');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();
});
//npx playwright test tagging.spec.ts --project=chromium --headed --grep "@sanity"
// test belongs to sanity and regression->  --grep "(?=.*@sanity)(?=.*@regression)"
// test either sanity or regression-> --grep "@sanity | @regression"
//run sanity test which are not belongs to regression--> --grep "@sanity" --grep-invert "@regression"
//in config file: grep: /@sanity/    