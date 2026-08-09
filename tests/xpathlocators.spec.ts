import{test,expect,Locator} from "@playwright/test"

test("Xpath demo in playwright", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //1.Relative xpath
    const demo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(demo).toBeVisible();


    //2.Contains()
    const products :Locator=page.locator("//h2//a[contains(@href,'computer')]");
    const productsCount:number =await products.count();
    console.log("computer related products:",productsCount);
    expect(productsCount).toBeGreaterThan(0);

    console.log("First computer product:",await products.first().textContent());
    console.log("Third computer product:",await products.nth(2).textContent());
    console.log("Last computer product:",await products.last().textContent());
    let  productTitle:String[]=await products.allTextContents()
    
    console.log("All Products:",productTitle);// it will return in array
    
    for (const pt of productTitle) {
        console.log(pt);
    }

    //Starts-with
    const buildProducts:Locator =page.locator("//h2//a[starts-with(@href,'/build')]"); //multiple ele
    const count:number=await buildProducts.count();
    console.log("Build products:",count);
    expect(count).toBeGreaterThan(0);

    //text
    const text:Locator =page.locator("//a[text()='Register']"); //multiple ele
    await expect(text).toBeVisible();
    console.log("text :",await text.innerText());

    //last
    const lastItem:Locator =page.locator("//div[@class='column follow-us']/ul/li[last()]"); //Last ele
    await expect(lastItem).toBeVisible();

    //position
     const itemPosition:Locator =page.locator("//div[@class='column follow-us']/ul/li[position()=5]"); //Last ele
    await expect(itemPosition).toBeVisible();
    console.log("Text content of position element:", await itemPosition.textContent());

})
