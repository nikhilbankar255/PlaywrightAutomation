import {test,expect,Locator} from "@playwright/test"

test("Handle elements using Xpath Axes", async({page})=>{

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //parent axes
    const parent: Locator= page.locator("//td[text()='Germany']/parent::tr")
    console.log(await parent.textContent());
    await expect(parent).toContainText("Maria Anders");

    //get all child of 2nd row

    const childs:Locator= page.locator("//table[@id='customers']//tr[3]/child::td");
    await expect(childs).toHaveCount(3);
    console.log(await childs.allTextContents());

    //ancestors- parent and grandfather

    const ancestor :Locator=page.locator("//td[text()='Germany']//ancestor::table");
    await expect(ancestor).toHaveAttribute("id","customers");
    console.log(await ancestor.allInnerTexts());

    //decendents

    const allTds:Locator=page.locator("//table[@id='customers']//descendant::td");
    await expect(allTds).toHaveCount(18);

    //following axis

    const following :Locator=page.locator("//td[normalize-space()='Germany']//following::td[1]");
    await expect(following).toHaveText("Centro comercial Moctezuma");

    //following sibling axis

    const followingSibling :Locator=page.locator("//td[normalize-space()='Germany']//following-sibling::td");
    await expect(followingSibling).toHaveCount(0);

    //preceding axis

    const preceding :Locator=page.locator("//td[normalize-space()='Germany']//preceding::td[1]");
    await expect(preceding).toHaveText("Maria Anders");
   

    //preceding sibling axis

    const precedingSibling :Locator=page.locator("//td[normalize-space()='Germany']//preceding-sibling::td");
    await expect(precedingSibling).toHaveCount(2);
    await expect(precedingSibling.nth(0)).toHaveText("Alfreds Futterkiste");
    await expect(precedingSibling.nth(1)).toHaveText("Maria Anders");
})
