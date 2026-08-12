import { test, expect, Locator } from "@playwright/test"

test("Search for data in a table", async ({ page }) => {

    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

    const searchBox = page.locator("#dt-search-0");
    await searchBox.fill("Zenaida Frank");

    const rows = await page.locator("#example tbody tr").all();
    if (rows.length >= 1) {
        let matchfound = false;
        for (let row of rows) {
            const text: string = await row.innerText();
            if (text.includes("Zenaida Frank")) {
                console.log("Record exist- found");
                matchfound = true;
                break;
            }
        }
        expect(matchfound).toBe(true);
    }
    else {
        console.log("No rows found with searched text")
    }
})

test("Read data from all the table Page", async ({ page }) => {

    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

    let hasmorePages = true;

    while (hasmorePages) {
        const rows = await page.locator("#example tbody tr").all();  //all rows
        for (let row of rows) {
            console.log(await row.innerText());
        }

        await page.waitForTimeout(2000);
        const nextButton: Locator = page.locator("button[aria-label='Next']");
        const isDisabled = await nextButton.getAttribute('class'); // disabled next

        if (isDisabled?.includes('disabled')) {
            hasmorePages = false;
        }
        else {
            await nextButton.click();
        }
    }
})

test("Filter the rows and check the rows count", async ({ page }) => {

    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

    const dropdown = page.locator("#dt-length-0");
    await dropdown.selectOption({ label: '25' });
    //await dropdown.selectOption("25");

    const rows = await page.locator("#example tbody tr").all();
    expect(rows.length).toBe(25);

    await page.waitForTimeout(2000);
})
