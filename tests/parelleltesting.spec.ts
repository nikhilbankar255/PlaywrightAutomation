import { test } from "@playwright/test"

//test.describe --> for grouping tests
//npx playwright test grouping.spec.ts --project=chromium --grep Group1

//modes: serial, parallel
test.describe.configure({mode:'parallel'})
test.describe("Group1", async () => {
    test("Test 1", async ({ }) => {

        console.log("Test 1");
    })

    test("Test 2", async ({ }) => {

        console.log("Test 2");
    })

     test("Test 3", async ({ }) => {

        console.log("Test 3");
    })

    test("Test 4", async ({ }) => {

        console.log("Test 4");
    })

    test("Test 5", async ({ }) => {

        console.log("Test 5");
    })
});