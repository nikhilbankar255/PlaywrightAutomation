import {test,expect,Locator} from "@playwright/test"

test("Multi select dropdown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

        //1. select option from dropdown
    await page.locator("#colors").selectOption(['Red','Blue','Green']);

       //2. Check number of option in the dropdown


       //3.check an option present in the dropdown


       //4. printing options from the dropdown

})