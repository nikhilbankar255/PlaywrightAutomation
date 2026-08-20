import { test } from "@playwright/test"

test.beforeAll("Before all",async()=>{
    console.log("this is before all");
})

test.afterAll("After all",async()=>{
    console.log("this is after all");
})

test.beforeEach("Beforeeach",async()=>
{
    console.log("this is before each");
})

test.afterEach("Aftereach",async()=>
{
    console.log("this is after each");
})

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