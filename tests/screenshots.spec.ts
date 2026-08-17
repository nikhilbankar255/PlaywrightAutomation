import { test, expect } from "@playwright/test"

test("Scrrenshot handle", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const timeStamp = Date.now();
    //page screenshot
    await page.screenshot({ path: 'C:\\Playwright_Automation\\tests\\screenshots\\' + 'homepage' + timeStamp + '.png' });

    //full page screenshot
    await page.screenshot({ path: 'screenshots/' + timeStamp + '.png', fullPage: true });

    //specific element screenshot
    const image = page.getByAltText("Tricentis Demo Web Shop");
    await image.screenshot({ path: 'screenshots/' + 'logo' + timeStamp + '.png' });

    //specific section
    const section = page.locator(".page-body");
    await section.screenshot({ path: 'screenshots/' + 'section' + timeStamp + '.png' })
})

test.only("screebshots from config", async ({ page }) => {

    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavano1');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Welcome pavano1' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
})
