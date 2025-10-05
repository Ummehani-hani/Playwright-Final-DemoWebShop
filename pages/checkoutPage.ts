import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkout(city: string = 'Karachi') {
    await this.page.click('#termsofservice');
    await this.page.click('#checkout');

    await this.page.waitForSelector('#BillingNewAddress_FirstName', { state: 'visible' });
    await this.page.fill('#BillingNewAddress_FirstName', 'Umm E Hani');
    await this.page.fill('#BillingNewAddress_LastName', 'Tester');
    await this.page.fill('#BillingNewAddress_Email', 'hani1234@aw.com');
    await this.page.selectOption('#BillingNewAddress_CountryId', { label: 'Pakistan' });
    await this.page.fill('#BillingNewAddress_City', city);
    await this.page.fill('#BillingNewAddress_Address1', '123 Clifton Block');
    await this.page.fill('#BillingNewAddress_ZipPostalCode', '75500');
    await this.page.fill('#BillingNewAddress_PhoneNumber', '03121234567');

    const continueBtn = this.page.getByRole('button', { name: 'Continue' });
    await expect(continueBtn).toBeVisible();
    await continueBtn.click();

    await this.page.waitForSelector('input[onclick="Shipping.save()"]', { state: 'visible' });
    await this.page.click('input[onclick="Shipping.save()"]');

    await this.page.waitForSelector('.button-1.shipping-method-next-step-button', { state: 'visible' });
    await this.page.click('.button-1.shipping-method-next-step-button');

    await this.page.waitForSelector('#paymentmethod_0', { state: 'visible' });
    await this.page.click('#paymentmethod_0');
    await this.page.click('.button-1.payment-method-next-step-button');

    await this.page.waitForSelector('.button-1.payment-info-next-step-button', { state: 'visible' });
    await this.page.click('.button-1.payment-info-next-step-button');

    await this.page.waitForSelector('input[value="Confirm"]', { state: 'visible' });
    await this.page.click('input[value="Confirm"]');

    await expect(this.page.getByText('Your order has been successfully processed!')).toBeVisible();
  }
}
