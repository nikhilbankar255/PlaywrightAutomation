import { test, expect, chromium } from "@playwright/test"

test("Handle popups", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    // multiple pop up
    await Promise.all([page.waitForEvent("popup"), page.getByText("Popup Windows").click()]); //for pop up it will be pop up event, for new tab it will be page event
    await page.waitForTimeout(2000);

    const allPopup = context.pages();  //returns array of pages
    console.log("Total popups opened: " + allPopup.length); //3
    console.log("URL of first popup: " + allPopup[0].url());
    console.log("URL of second popup: " + allPopup[1].url());
    console.log("URL of third popup: " + allPopup[2].url());
    expect(allPopup.length).toBe(3);

    for (const pw of allPopup) {
        const title = await pw.title();
        if (title.includes('selenium')) {
            await pw.locator('.navbar-toggler-icon').click();
            await pw.close();
        }
    }
})
