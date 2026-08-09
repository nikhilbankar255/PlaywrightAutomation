import {test,expect} from "@playwright/test";

test("verify page url", async({page})=>{

await page.goto("https://www.amazon.in/");

let url:String =  page.url();
console.log("url->",url);

await  expect(page).toHaveURL("https://www.amazon.in/");
})