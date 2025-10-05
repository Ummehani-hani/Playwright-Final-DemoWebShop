import { Page,expect } from "@playwright/test";
export class LoginPage{
    readonly page :Page;
    constructor(page:Page){
        this.page=page;
    }
    async goto(){
        await this.page.click('text=Log in');
    }

    async login(email:string, password:string){
        await this.page.fill('#Email',email);
        await this.page.fill('#Password',password);
       await this.page.getByRole('button', { name: 'Log in' }).click();

        // Narrow down to the header cart link
await expect(
  this.page.getByRole('link', { name: /Shopping cart/i }).first()
).toBeVisible();

    }
}