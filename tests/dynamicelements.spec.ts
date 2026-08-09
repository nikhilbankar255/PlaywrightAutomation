import {test,expect,Locator} from "@playwright/test"


test("Handle dynamic elements using xpath", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=1; i<=5; i++)
    {

            let button:Locator=page.locator("//button[text()='START' or text()='STOP']");

            await button.click();

            await page.waitForTimeout(2000);
    }

})