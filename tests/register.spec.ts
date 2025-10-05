import { test, expect } from '@playwright/test';

test('Add Laptop to Cart and Checkout', async ({ page }) => {
  // Open website
  await page.goto('https://demowebshop.tricentis.com/');

  // Register user
  await page.click('text=Register');
  await page.fill('#FirstName', 'Umm E Hani');
  await page.fill('#LastName', 'Tester');
  await page.fill('#Email', `hani${Date.now()}@mail.com`);
  await page.fill('#Password', 'Password123');
  await page.fill('#ConfirmPassword', 'Password123');
  await page.click('#register-button');

  // Navigate to Laptop
  await page.click('text=Computers');
  await page.click('text=Notebooks');
  await page.click('text=14.1-inch Laptop');

  // Add to cart
  await page.click('#add-to-cart-button-31');
 
 await expect(page.locator('.cart-qty')).toHaveText('(1)');

  // Proceed to checkout (simplified)
  await page.click('text=Shopping cart');
  await page.click('text=Checkout');
});
