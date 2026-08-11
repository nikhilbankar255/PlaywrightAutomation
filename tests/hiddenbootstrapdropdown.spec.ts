import{test,expect,Locator} from "@playwright/test"

test("Bootstrap hidden dropdown",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//login
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
 await page.locator("button[type=submit]").click();

 //click on PIM
 await page.getByText("PIM").click();

 //click on job title dropdowj
 await page.locator("form i").nth(2).click();
 await page.waitForTimeout(2000);

 //capture all options from dropdown
 const options:Locator= page.locator("div[role='listbox'] span");
 const count:number=await options.count();
 console.log("number of options:", count)

 //print options
 console.log("printing all options:");
 for(let i=0; i<count;i++)
 {
    console.log(await options.nth(i).innerText());
 }

 //select option
for(let i=0; i<count;i++)
 {
    const text=await options.nth(i).innerText();
    if(text==="QA Engineer")
    {
        await options.nth(i).click();
        break;
    }
 }
 
 console.log("Final outpout-selected option:",await page.locator(".oxd-select-text-input").nth(2).innerText());
 await page.waitForTimeout(2000);
})
