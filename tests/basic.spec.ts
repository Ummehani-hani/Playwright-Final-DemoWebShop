import { test, expect } from '@playwright/test';

// test('Demo web shop', async ({page})=>{
//     await page.goto('http://demowebshop.tricentis.com/');
//     await expect(page).toHaveTitle(/Demo Web Shop/);
// });

// test('Search product ', async ({page})=>{
//     await page.goto('http://demowebshop.tricentis.com/');
//     await page.fill('input[name="q"]','laptop');
//     await page.click('input[value="Search"]');
//     const count = await page.locator('.product-item').count();
//     expect(count).toBeGreaterThan(0)
    
// });

// test('Register button',async({page})=>{
//     await page.goto('http://demowebshop.tricentis.com/');
//     await page.click('a.ico-register');
//     await expect(page).toHaveURL(/register/);
// });

// test('Login button',async({page})=>{
//     await page.goto('http://demowebshop.tricentis.com/');
//     await page.click('a.ico-login');
//     await expect(page).toHaveURL(/login/);
// });

// test('Shoppingcart button',async({page})=>{
//     await page.goto('http://demowebshop.tricentis.com/');
//     await page.click('a.ico-cart');
//     await expect(page).toHaveURL(/cart/);
// });


//Check text on page
// test('Register button',async({page})=>{
//     await page.goto('http://demowebshop.tricentis.com/');
    
//     await expect(page.locator('.header-links')).toContainText('Register');
// });

// test('Shopping cart should be visible', async ({ page }) => {
//   await page.goto('http://demowebshop.tricentis.com/');
//   await expect(page.getByRole('link', { name: 'Shopping cart (0)' })).toBeVisible();
// });

test('Registration', async ({ page }) => {
  await page.goto('http://demowebshop.tricentis.com/');
  await page.click('a.ico-register');
  await expect(page).toHaveURL(/register/);
const uniqueEmail = `hani${Date.now()}@gmail.com`; 
  await page.fill("#FirstName","Umm E Hani");
  await page.fill("#LastName","Tester");
  await page.fill("#Email",uniqueEmail);
  await page.fill("#Password","hani12@");
  await page.fill("#ConfirmPassword","hani12@");
  await page.click('input[value="Register"]');
  await expect(page.locator('.result')).toHaveText("Your registration completed");
});
