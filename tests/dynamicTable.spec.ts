import { test, expect, Locator } from "@playwright/test"

test("Verify chrome cpu load in dynamic table", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dynamic-table#google_vignette");

    const table: Locator = await page.locator("table tbody");
    expect(table).toBeVisible();

    const rows: Locator[] = await table.locator("tr").all();

    console.log("number of rows:", rows.length)

//1. Fro chrome process get value of cpu load
    let cpuLoad = '';
    for (let row of rows) {
        const column: string = await row.locator("td").nth(0).innerText();

        if (column === "Chrome") {
            //const cpuLoad= await row.locator('td:has-text("%")').innerText();
            cpuLoad = await row.locator("td", { hasText: '%' }).innerText();
            console.log("cpu load of chrome:", cpuLoad);
            break;
        }
    }

//2. compare cpu value with yellow label
    const yellowBoxText: string = await page.locator("#chrome-cpu").innerText();
    console.log("Outside chrome cpu load is:", yellowBoxText);
    if (yellowBoxText.includes(cpuLoad)) {
        console.log("CPU load of chrome is equal");
    }
    else {
        console.log("CPU load of chrome is not equal");
    }
    expect(yellowBoxText).toContain(cpuLoad);
    await page.waitForTimeout(2000);
})