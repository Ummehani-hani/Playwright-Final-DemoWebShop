import {test, expect} from '@playwright/test'

test('website url open',async({page})=>{
await page.goto('http://demowebshop.tricentis.com/');
await expect(page).toHaveTitle(/Demo Web Shop/)

await page.click('text=Log in')
await page.fill('#Email','hani${Date.now()}@mail.com');
await page.fill('#Password','hani1234');
await page.click('#login-button')
});