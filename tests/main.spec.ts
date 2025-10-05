import { test } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';
import { LoginPage } from '../pages/loginPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { VerifyPage } from '../pages/verifyPage';
import users from '../test-data/users.json';

test.setTimeout(60000);

for (const user of users) {
  test(`E2E Purchase Flow for ${user.firstName} ${user.lastName}`, async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const verifyPage = new VerifyPage(page);

    const email = `${user.emailPrefix}${Date.now()}@mail.com`;

    await registerPage.goto();
    await registerPage.register(user.firstName, user.lastName, email, 'Test@123');
    await registerPage.logout();

    await loginPage.goto();
    await loginPage.login(email, 'Test@123');

    await cartPage.addLaptopToCart();
    await checkoutPage.checkout(user.city);
    await verifyPage.verifyOrder();
  });
}
