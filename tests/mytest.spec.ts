import {test, expect} from "@playwright/test";

//fixture- global variable : page, browser 

test("verify page title", async ({page})=>{

    await page.goto("https://www.amazon.in/");
    let title:String=  await page.title();
     console.log("title", title);

    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
})