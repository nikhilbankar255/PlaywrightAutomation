import { test, expect } from '@playwright/test';

test('test to do app@regression', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');

  await expect(page.getByRole('contentinfo')).toContainText('Double-click to edit a todo');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('workout');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-item-label')).toBeVisible();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('breakfast');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('study');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-list')).toContainText('');
  await expect(page.getByTestId('todo-list')).toMatchAriaSnapshot(`- text: study`);
});