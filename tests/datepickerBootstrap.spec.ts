import { test, expect, Locator, Page } from "@playwright/test"

async function selectDate(targetMonthYear: string, targetDay: string, page: Page) {
    while (true) {
        const currentMonthyear = await page.locator(".monthYear___a77d7b").innerText();

        if (currentMonthyear === targetMonthYear) {
            console.log("found");
            break;
        }
        else {
            await page.getByRole('button', { name: /Next month/ }).click();
        }
    }

    // const allDates = page.locator(".datesWrap___3c1607");
    // const count = await allDates.count();
    // console.log("Number of dates are:", count);
    // for (let i = 0; i < count; i++) {
    //     const date = allDates.nth(i);
    //     const dateText = (await date.innerText()).trim();
    //     console.log("Date:", dateText);
    //     if (dateText === day) {
    //         await date.click();
    //         break;
    //     }
    // }

    await page.locator("//span[text()=" + targetDay + "]").click();
}
test("Bootstrap datepicker", async ({ page, browserName }) => {
    test.skip(browserName !== "firefox", "This test runs only on Firefox");

    await page.goto("https://www.redbus.in/");
    
    await page.locator("div[role='dialog']").click();

    //seect target date
    const monthYear = "November 2026";
    const day = "20";

    await selectDate(monthYear, day, page);
    await page.waitForTimeout(2000);
})
