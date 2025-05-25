import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
await page.goto('https://www.demoblaze.com/');
await page.getByRole('link', { name: 'Log in' }).click();
await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Home (current)' }).click();
await page.getByRole('link', { name: 'Nokia lumia' }).click();
await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Home (current)' }).click();
await page.getByRole('link', { name: 'Cart' }).click();
await page.getByRole('button', { name: 'Place Order' }).click();
await page.getByRole('textbox', { name: 'Total: 1180 Name:' }).click();
await page.getByRole('textbox', { name: 'Total: 1180 Name:' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Total: 1180 Name:' }).fill('l');
await page.getByRole('textbox', { name: 'Total: 1180 Name:' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Total: 1180 Name:' }).fill('leiser');
await page.getByRole('textbox', { name: 'Country:' }).click();
await page.getByRole('textbox', { name: 'Country:' }).press('CapsLock');
await page.getByRole('textbox', { name: 'Country:' }).fill('Arg');
await page.getByRole('textbox', { name: 'City:' }).click();
await page.getByRole('textbox', { name: 'City:' }).press('CapsLock');
await page.getByRole('textbox', { name: 'City:' }).fill('Baires');
await page.getByRole('textbox', { name: 'Credit card:' }).click();
await page.getByRole('textbox', { name: 'Credit card:' }).fill('5543216784903827');
await page.getByRole('textbox', { name: 'Month:' }).click();
await page.getByRole('textbox', { name: 'Month:' }).fill('11');
await page.getByRole('textbox', { name: 'Year:' }).click();
await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
await page.getByRole('button', { name: 'Purchase' }).click();
await page.getByRole('button', { name: 'OK' }).click();});