import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavano1');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});

//to generate the code on mobile device,browser use the following command
//npx playwright codegen -o tests/codegentest.spec.ts --device="iPhone 13" 
//npx playwright codegen -o tests/codegentest.spec.ts --browser "firefox" 

//can set size of the browser window using the following command
//npx playwright codegen -o tests/codegentest.spec.ts --viewport-size=1280,720

//debugging the test using the following command
//npx playwright test tests/codegentest.spec.ts --debug

