import { test, expect, Locator } from "@playwright/test";


//1. getByAltText()
test("Verify Playwright Locators", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    await page.waitForTimeout(2000);

    const continueButton =  page.locator(".a-button-text");
    if (await continueButton.isVisible()) {
        await continueButton.click();
    }

    await page.waitForTimeout(2000);
    const logo: Locator = page.getByText("Amazon Music")
    await expect(logo).toBeVisible();

    //2.getByVisibleText()
    // const text: Locator= page.getByText("Welcome to our store");
    // await expect(text).toBeVisible();
    await expect(page.getByText("Mobiles")).toBeVisible();

    //3. getByRole() here it's not working so used css. can try with other website
    const role: Locator = page.locator('#nav-link-accountList-nav-line-1');
    await role.click();
    await expect(page.getByRole("heading", { name: 'Sign in or create account' })).toBeVisible();

    //4.getByLabel()
    await page.getByLabel("Enter mobile number or email").fill("test@test.com");

    //5. getByPlaceholder()
    await page.getByLabel("Amazon").click();
    await page.getByPlaceholder("Search Amazon.in").fill("mobile");

    //6. getByTitle()
    const searchBox: Locator = page.getByTitle("Search in");
    await expect(searchBox).toBeVisible();
})