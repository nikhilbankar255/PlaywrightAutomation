import {test,expect,Locator} from "@playwright/test"

test("Test Input Actions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const textBox:Locator=page.locator("#name");
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    const maxlength: String | null=await textBox.getAttribute("maxlength"); // returns value of maxlength
    expect(maxlength).toBe("15");

    await textBox.fill("jonny");
    const enteredValue=await textBox.inputValue();
    console.log("input value Name is:",enteredValue);
    expect(enteredValue).toBe("jonny");

    await page.waitForTimeout(2000);
})


//radio button
test("Radio button Actions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const male:Locator=page.locator("#male");
    await expect(male).toBeVisible();
    await expect(male).toBeEnabled();

    expect(await male.isChecked()).toBe(false);

    await male.check();  //select radio button
    await expect(male).toBeChecked();  // check selected or not
        await page.waitForTimeout(2000);

})

//checkbox
test("Checkbox Actions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
   
    //1. select specific checkbox (sunday) using getByLabel and assert
    const sundayCheckbox:Locator=page.getByLabel('Sunday');
    await sundayCheckbox.check();
    expect(sundayCheckbox).toBeChecked();
    await page.waitForTimeout(2000);

    //2. select all checkboxes(days of the week) and assert each is checked
    
    const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkboxes:Locator[]= days.map(index=> page.getByLabel(index));
    expect(checkboxes.length).toBe(7);

//3. Select all checkboxes and assert each is checked
    for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    
//4. uncheck last 3 checkboxes and assert
       for(const checkbox of checkboxes.slice(-3))
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }  
 
    //5. Toggle checkboxes: if checked, unchecked; If unchecked, check. Assert state flipped
    await page.waitForTimeout(3000);

    for(const checkbox of checkboxes)
    {

        if(await checkbox.isChecked())
        {
        //only if checked
         await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
        }
        else
        {
         //only if not checked
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        }
     }


     //7. Randomly select checkbox- by index{1,3,6}
     const indexes:number[]= [1,3,6];
     for(const i of indexes)
     {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
     }

     //8. select the check based on the label

     const weekName: String ="Monday";
     for(const label of days)
     {
        if(label===weekName)
        {
            const checkbox=page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
     }
         await page.waitForTimeout(3000);
});
