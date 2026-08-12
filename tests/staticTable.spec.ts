import { test, expect, Locator } from "@playwright/test"

test("Static web table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    //count nuber of rows in a table
    const rows: Locator = table.locator("tr");  //used table here. existing locator. chaininng of locator
    await expect(rows).toHaveCount(7);  //1st approach

    const rowCount: number = await rows.count();
    console.log("number of rows in a table:" + rowCount);
    expect(rowCount).toBe(7);  //2nd approanch

    // count number of column
    const column: Locator = rows.locator("th"); // chaining of locator. used rows here
    await expect(column).toHaveCount(4);  //1st approach

    const columnCount: number = await column.count();
    console.log("number of columns in a table:", columnCount);
    expect(columnCount).toBe(4);  // 2nd approach

    // read all data fromm row 2nd
    const secondRowCell: Locator = rows.nth(2).locator('td');
    const rowText: string[] = await secondRowCell.allInnerTexts();
    console.log("2nd Row data:", rowText)           //1st approch to print
    await expect(secondRowCell).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);

    for (let text of rowText)        //2nd approach to print
    {
        console.log(text);
    }

    // read all data from table
    console.log("Printing all table data....");

    const allRowData: Locator[] = await rows.all();
    for (let rowText of allRowData.slice(1))  //slice 1 will skip the header
    {
        const cols = await rowText.locator("td").allInnerTexts();
        console.log(cols.join('\t'));          //join method to not show as array. \t for tab space
    }

    //print book names where author should be Mukesh
    console.log("books by Mukesh....");
    const mukeshBooks: string[] = [];
    for (let rowText of allRowData.slice(1))  //slice 1 will skip the header
    {
        const cells = await rowText.locator("td").allInnerTexts();
        const author = cells[1];
        const book = cells[0];

        if (author === 'Mukesh') {
            console.log(`${author} \t ${book}`);
            mukeshBooks.push(book);
        }
    }
    expect(mukeshBooks).toHaveLength(2);

    //calculate prices
    let totalPrice: number = 0;
    for (let rowText of allRowData.slice(1))  //slice 1 will skip the header
    {
        const cells = await rowText.locator("td").allInnerTexts();
        const price = cells[3];
        totalPrice = totalPrice + parseInt(price);
    }
    console.log("Total price: ", totalPrice);
    expect(totalPrice).toBe(7100);
})
