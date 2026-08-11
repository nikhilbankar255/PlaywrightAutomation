import { test, expect, Locator } from "@playwright/test"

test("Autosuggest dropdown", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    //login pop up
    await page.waitForTimeout(2000);
    const popup: Locator = page.locator(".b3wTlE");
    if (await popup.isVisible()) {
        popup.click();
    }

    const search = page.locator("input[name='q']").first(); // search box
    await search.click();
    await search.fill("mobile");
    await page.waitForTimeout(3000);

    //get all the suggested options -- ctrl+sift+p -> enter emulate a focused page then can inspect results
    const options: Locator = page.locator("ul>li");
    const count = await options.count();
    console.log("Number of suggested options: ", count);

    console.log("Printing auto suggestion:");
    //printing all
    for (let i = 0; i < count; i++) {
        console.log(await options.nth(i).innerText());
    }

    //select option
    for (let i = 0; i < count; i++) {
        const mobile = await options.nth(i).innerText();
        await page.waitForTimeout(2000);
        if (mobile === 'mobile under 20000rs') {
            await options.nth(i).click();
            break;
        }
    }
})
