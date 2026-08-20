import{test, expect} from "@playwright/test"

test("tracing test", async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavano1');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Welcome pavano1' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
});