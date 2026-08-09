import {test,expect,Locator} from "@playwright/test"

//using xpath
test("Handle dynamic elements using xpath", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=1; i<=5; i++)
    {

            let button:Locator=page.locator("//button[text()='START' or text()='STOP']");

            await button.click();

            await page.waitForTimeout(2000);
    }

})


//using css
test("Handle dynamic elements using css", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=1; i<=5; i++)
    {

            let button:Locator=page.locator("button[name='start'],button[name=stop]");

            await button.click();

            await page.waitForTimeout(2000);
    }

})


//using playwright locator getByRole
test("Handle dynamic elements using Palywright locator", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=1; i<=5; i++)
    {

            let button:Locator=page.getByRole('button', {name: /START|STOP/});

            await button.click();

            await page.waitForTimeout(2000);
    }

})