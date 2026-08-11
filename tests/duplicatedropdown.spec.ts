import {test,expect,Locator} from "@playwright/test"

test("Verify dropdown having duplicates", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

 
    //const dropdownOptions:Locator= page.locator("#animals>option");  //animal dropdown have no duplicates
    const dropdownOptions: Locator= page.locator("#colors>option"); // colors have duplicates
   
    //console.log(await dropdownOptions.allTextContents());
    const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());

    const myset= new Set<String>(); //set - duplicates not allowed
    const duplicates:string[]=[]; //array- duplicates allowed

   for(const text of optionsText)
   {
        if(myset.has(text))
        {
            duplicates.push(text);
        }else{
            myset.add(text);
        }
   }

    console.log("Duplicate options are :", duplicates);
    console.log("unique options are :", myset);

    if(duplicates.length>0)
    {
        console.log("Duplicate options are :", duplicates);
    }
    else{
            console.log("No duplicates found..");
    }
})
