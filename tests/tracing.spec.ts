import{test, expect} from "@playwright/test"

/*
1. Using playwright.config file
2. using command line --trace=on
3. code(programatically) -(no html report) 
     context.tracing.start({screenshots:true,snapshots:true});
    //statements
     context.tracing.stop({path:'trace.zip'});

     To view trace file--->
     1) from html file-> click on trace.zip
     2) through command -> npx playwright show-trace trace.zip
     3) using utility-> https://trace.playwright.dev/
*/

test("tracing test", async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavano1');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Welcome pavano1' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
});

test("context tracing test", async({page,context})=>{

    context.tracing.start({screenshots:true,snapshots:true});
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavano1');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Welcome pavano1' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
    context.tracing.stop({path:'trace.zip'});
});