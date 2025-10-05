import { Page, expect } from '@playwright/test';

export class VerifyPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyOrder() {
    const orderSuccess = this.page.locator('div.title strong');
    await expect(orderSuccess).toBeVisible();
    const orderText = await orderSuccess.textContent();
    expect(orderText?.trim()).toBe('Your order has been successfully processed!');

   
    const orderNumberItem = this.page.locator('li', { hasText: 'Order number:' });
    await expect(orderNumberItem).toBeVisible();

    const orderNumberText = await orderNumberItem.textContent();
    const match = orderNumberText?.match(/\d+/);
    expect(match).not.toBeNull();
    console.log('Order Number:', match ? match[0] : 'Not found');

    await this.page.click('input[value="Continue"]');
    await expect(this.page).toHaveURL('https://demowebshop.tricentis.com/');
  }
}
