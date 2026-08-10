import{test,expect,Locator} from "@playwright/test";

test("Vaerify css locators",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //using id - #
    const searchField:Locator=page.locator("input#small-searchterms");
    await expect(searchField).toBeVisible();
    await searchField.fill("shirt");

   //using class - .
    const searchbox:Locator=page.locator(".search-box-text");
    await expect(searchbox).toBeVisible();
    await searchbox.fill("shirt");

    //tag[attribute=value] 
    const searchbox1:Locator=page.locator("input[name=q]");
    await expect(searchbox1).toBeVisible();
    await searchbox1.fill("shirt");

    //tag.class[attribute=value] 
    await page.locator("input.search-box-text[value='Search store']").fill("shirt");
})
