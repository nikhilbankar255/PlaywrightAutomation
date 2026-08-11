import{test,expect,Locator} from "@playwright/test"


test("Single select dropdown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //1. select option from dropdown
    await page.locator("#country").selectOption("India");  //visible text

    
    await page.locator("#country").selectOption({value:"uk"}); //value

    
    await page.locator("#country").selectOption({label:"France"}); // Label

   
    await page.locator("#country").selectOption({index:5});  // Index

    //2. Check number of option in the dropdown

    const options: Locator = page.locator("#country>option");
     //expect(await options.count()).toBe(10);
    await expect(options).toHaveCount(10);

    //3.check an option present in the dropdown
    const texts: string[]=(await options.allTextContents()).map(text=>text.trim());
     expect(texts).toContain("Japan");
    
     //4. printing options from the dropdown
     for(const text of texts)
     {
        console.log(text);
     }
});