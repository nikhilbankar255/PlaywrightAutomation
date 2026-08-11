import {test,expect,Locator} from "@playwright/test"

test("Multi select dropdown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

 //1. select option from dropdown
    await page.locator("#colors").selectOption(['Red','Blue','Green']); //using visible text


 //2. Check number of option in the dropdown
    const allOptions: Locator= page.locator("#colors>option");
    await expect(allOptions).toHaveCount(7);

       //3.check an option present in the dropdown
    const optionsText:string []=(await allOptions.allTextContents()).map(text=>text.trim());
     expect(optionsText).toContain("Green");

       //4. printing options from the dropdown
    for(const text of optionsText)
    {
        console.log(text);
    }
})
