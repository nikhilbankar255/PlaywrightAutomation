import { test, expect, Page } from "@playwright/test";

class LoginPage {
    constructor(private readonly page: Page) {}

    async open() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/", { waitUntil: "domcontentloaded" });
    }

    async signIn(username: string, password: string) {
        await this.page.getByRole("textbox", { name: "Username:" }).fill(username);
        await this.page.getByRole("textbox", { name: "Password:" }).fill(password);
        await this.page.getByRole("radio", { name: "User" }).check();
        await this.page.getByRole("button", { name: "Okay" }).click();
        await this.page.getByRole("checkbox", { name: "I Agree to the terms and conditions" }).check();
        await this.page.getByRole("button", { name: "Sign In" }).click();
    }
}

test("sign in and verify iPhone X is available in the shop", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.signIn("rahulshettyacademy", "Learning@830$3mK2");

    await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
    await expect(page.getByRole("heading", { name: "iphone X" })).toBeVisible();
});