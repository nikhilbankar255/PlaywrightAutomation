import { test, expect, Page, BrowserContext } from "@playwright/test"

let page: Page;
//let context: BrowserContext;
test.beforeAll("Open app", async ({ browser }) => {
    //context = await browser.newContext();
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
})
test.afterAll("Closing app", async () => {
    await page.close();
})

test.beforeEach("Login", async () => {
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavano1");
    await page.locator("#loginpassword").fill("test@123");

    await page.locator("button[onclick='logIn()']").click();
    await page.waitForTimeout(2000);
});

test.afterEach("Logout", async () => {

    await page.locator("#logout2").click();
});

test("Find number of Products", async () => {

    const products = page.locator(".hrefch");
    const count = await products.count();
    console.log("Number of products:", count);
    await expect(products).toHaveCount(9);
});

test("Add Product to cart", async () => {

    await page.locator("text='Samsung galaxy s6'").click();

    page.once('dialog', async (dialog) => {
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    });

    await page.locator(".btn.btn-success.btn-lg").click();
});