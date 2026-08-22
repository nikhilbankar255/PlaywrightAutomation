import{test,expect, firefox}from "@playwright/test"

/* 5 annotations
    only
    skip
    fail
    fixme
    slow
*/
test.skip("test1", async({page})=>{

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

test("test2", async({page})=>{

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

//skip the test based on condition
test("test3", async({page, browserName})=>{

    test.skip(browserName==='firefox','this test skipped if browser is firefox');
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

//fail
test.fail("test4", async({page})=>{

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

//fixme -test will be skipped  -- if the test is not completed but we running the code
test.fixme("test5", async({page})=>{

    await page.goto("https://www.google.com/");
})

//slow
test("test6", async({page})=>{
    test.slow(); //triple the default time (default time:30 secs, after tripling 90 secs)
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})