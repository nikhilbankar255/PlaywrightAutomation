import { test, expect } from "@playwright/test"

test("Handle authenticed popup", async ({ browser }) => {

    const context = await browser.newContext({ httpCredentials: { username: "admin", password: "admin" } }); //passing the username and password in the browser context 
    const page = await context.newPage();

    //1. Directly passing the username and password in the URL
    //await page.goto("https://the-internet.herokuapp.com/basic_auth");
    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    // await page.waitForLoadState();
    // await expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();

    //2. pass the login with browser context
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();

    await expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();

    await page.waitForTimeout(2000);
})
