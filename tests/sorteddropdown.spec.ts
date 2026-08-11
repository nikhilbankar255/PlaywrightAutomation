import {test,expect,Locator} from "@playwright/test"

test("Verify dropdown is Sorted", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

 
    const dropdownOptions:Locator= page.locator("#animals>option");  //animal dropdown is already sorted
    //const dropdownOptions: Locator= page.locator("#colors>option"); // colors are not sorted
   
    //console.log(await dropdownOptions.allTextContents());
    const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());

    const originalArray: string[] = [...optionsText];  //... is a spread operator
    const sortedArray: string[] = [...optionsText.sort()];

    console.log("Original array:",originalArray);
    console.log("Sorted array:",sortedArray);

     expect(originalArray).toEqual(sortedArray);
    //await page.waitForTimeout(3000);
})
