import { test, expect, chromium } from "@playwright/test"

test("handle tabs", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    // statements should go parellelly, so we can use Promise.all() to wait for the new tab to open and click on the link at the same time
    //const newTab = await page.getByText("New Tab").click(); //open new tab/page

    const [childPage] = await Promise.all([context.waitForEvent("page"), parentPage.getByText("New Tab").click()]);

    //switch between tabs
    const pages = context.pages();
    console.log("Total tabs opened: " + pages.length);

    console.log("title of parent page:", await pages[0].title());
    console.log("title of parent page:", await pages[1].title());

    //Approach 2: 
    console.log("Parent page titile:", await parentPage.title());
    console.log("Child page titile:", await childPage.title());
})
