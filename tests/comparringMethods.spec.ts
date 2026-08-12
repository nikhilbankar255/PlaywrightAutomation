import{test,expect,Locator} from "@playwright/test"

test("Comparring Methods",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const products:Locator=page.locator(".product-title");
    
    //1. innerText() vs textContent()
    console.log(await products.nth(1).innerText());
        console.log(await products.nth(1).textContent());

    const count=await products.count();
        for(let i=0;i<count;i++)
        {
          // console.log(await products.nth(i).innerText()); // eleminate spaces and line breakes
           const productText: string |null=await products.nth(i).textContent();
          console.log(productText?.trim());  //spaces and lines. to use the text we have to use trim() using map.
        }

     //2. allinnerText() vs allTextContent()
     const productallinnerTexts:string[]=await products.allInnerTexts();
     console.log("innerText()->",productallinnerTexts);

      const productallTextcontents:string[]=(await products.allTextContents()).map((text=>text.trim()));
     console.log("textContents()->",productallTextcontents);

     //3. all() ---> array of locators[]
     const allProductslocators:Locator[]=await products.all();
    
     console.log("printing in all() loop of=>");
     for(let product of allProductslocators)
     {
        console.log(await product.innerText());
     }

          console.log("printing in all() loop in=>");

     for(let i in allProductslocators)
     {
        console.log(await allProductslocators[i].innerText());
     }
})
