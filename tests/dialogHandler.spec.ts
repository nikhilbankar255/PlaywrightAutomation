import { test, expect } from "@playwright/test"

test("Simple Dialog handle", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Register a dialog handler to handle the alert dialog
    page.on('dialog', async (dialog) => {

        console.log("Dialog type:", dialog.type());
        console.log("Dialog message:", dialog.message());

        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("I am an alert box!");
        dialog.accept();
    });

    await page.locator("#alertBtn").click();
})

test("Confirm Dialog handle", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Register a dialog handler to handle the confirm dialog
    page.on('dialog', async (dialog) => {

        console.log("Dialog type:", dialog.type());
        console.log("Dialog message:", dialog.message());

        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Press a button!");
        dialog.dismiss();
    });

    await page.locator("#confirmBtn").click();
    const text = await page.locator("#demo").innerText();
    console.log("Text after dismissing confirm dialog:", text);
    expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
})

test("Prompt Dialog handle", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Register a dialog handler to handle the prompt dialog
    page.on('dialog', async (dialog) => {

        console.log("Dialog type:", dialog.type());
        console.log("Dialog message:", dialog.message());

        expect(dialog.type()).toBe("prompt");
        expect(dialog.message()).toBe("Please enter your name:");

        expect(dialog.defaultValue()).toBe("Harry Potter");
        dialog.accept("nikhil is testing playwright");
    });

    await page.locator("#promptBtn").click();
    const text = await page.locator("#demo").innerText();
    console.log("Text after dismissing prompt dialog:", text);

    expect(page.locator("#demo")).toHaveText(text);
})
