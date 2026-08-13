import { test, expect, Locator } from "@playwright/test"

test("Frames handling", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //total number of frames
    const frames = page.frames();
    console.log("number of frames:", frames.length);

    //Approach 1: using page.frameLocator()
    const frame = page.frameLocator("frame[src='frame_1.html']");
    if (frame) {
        //await frame.locator("[name='mytext1']").fill("Test frame");
        //await frame.fill("[name='mytext1']","test frame");
        await frame.locator("input[name='mytext1']").fill("Hello Playwright");
    }
    else {
        console.log("Frame not found");
    }
    await page.waitForTimeout(2000);
})