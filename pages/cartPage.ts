import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addLaptopToCart() {
    await this.page.goto('https://demowebshop.tricentis.com/');
    await this.page.click('a[href="/computers"]');
    await this.page.click('a[href="/notebooks"]');
    await this.page.click('text=14.1-inch Laptop');
    const productName = await this.page.locator('h1').innerText();
    expect(productName.trim()).toBe('14.1-inch Laptop');
    const priceText = await this.page.locator('.product-price span').innerText();
    const numericPrice = parseFloat(priceText.replace(/[^0-9.]/g, ''));
    expect(numericPrice).toBe(1590.00);
    await this.page.click('#add-to-cart-button-31');
    await expect(this.page.locator('.cart-qty')).toHaveText('(1)');
    await this.page.click('a[href="/cart"]');
  }
}
