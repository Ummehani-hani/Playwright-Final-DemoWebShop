import { Page, expect } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('http://demowebshop.tricentis.com/');
        const registerLink = this.page.getByRole('link', { name: 'Register' });
        await expect(registerLink).toBeVisible({ timeout: 10000 });
        await registerLink.click();
    }

    async register(firstName: string, lastName: string, email: string, password: string) {
        await this.page.fill('#FirstName', firstName);
        await this.page.fill('#LastName', lastName);
        await this.page.fill('#Email', email);
        await this.page.fill('#Password', password);
        await this.page.fill('#ConfirmPassword', password);
        await this.page.click('#register-button');
        await expect(this.page.getByText('Your registration completed')).toBeVisible();
    }

    async logout() {
        const logoutLink = this.page.getByRole('link', { name: 'Log out' });
        await expect(logoutLink).toBeVisible();
        await logoutLink.click();
    }
}
