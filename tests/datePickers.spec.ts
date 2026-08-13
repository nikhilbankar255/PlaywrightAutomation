import { test, expect, Locator, Page } from "@playwright/test"

async function selectDate(targetYear: string, targetMonth: string, targetDay: string, page: Page, isFuture: boolean) {
    while (true) {
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();
        const currentYear = await page.locator(".ui-datepicker-year").textContent();
        
        if (currentMonth === targetMonth && currentYear === targetYear) {
            console.log("found");
            break;
        }
        else {
            if (isFuture) {
                //future dates
                await page.getByText("Next").click();
            }
            else {
                //past dates
                await page.getByText("Prev").click();
            }
        }
    }

    const allDates: Locator[] = await page.locator("#ui-datepicker-div td").all();
    for (let date of allDates) {
        const dateText: string = await date.innerText();
        if (dateText === targetDay) {
            await date.click();
            break;
        }
    }
}

test("JQuery datepicker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput: Locator = page.locator("#datepicker");
    await expect(dateInput).toBeVisible();
    //fill() method    
    //await date.fill("14/08/2026");

    // using date picker
    await dateInput.click();

    //seect target date
    const year = "2027";
    const month = "November";
    const day = "20";

    await selectDate(year,month,day,page,true);

    await expect(dateInput).toHaveValue("11/20/2027");
})
