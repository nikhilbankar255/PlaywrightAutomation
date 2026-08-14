import { test, expect,chromium } from "@playwright/test"

test("Browser context", async () => {

    const browser=await chromium.launch();      //create a new browser instance
    const context=await browser.newContext();   //create a new browser context
    const page1 = await context.newPage();       //create a new page in the browser context
    const page2 = await context.newPage();       //create a new page in the browser context

    console.log("number of pages:",context.pages().length)
    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page2.goto("https://demowebshop.tricentis.com/");

    await expect(page1).toHaveTitle("Automation Testing Practice");
    await expect(page2).toHaveTitle("Demo Web Shop");
})
