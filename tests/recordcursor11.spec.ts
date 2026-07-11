import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('xycsdfadf');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('asdfvgbnjuyt');
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('1234456');
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567');
  await expect(page.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});