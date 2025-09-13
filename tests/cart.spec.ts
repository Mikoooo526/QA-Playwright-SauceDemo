import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { users } from '../fixtures/users';

test.describe('Koszyk @regression', () => {
  test('dodanie produktu do koszyka', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(users.valid.username, users.valid.password);
    await inventory.assertLoggedIn();

    await inventory.addBackpackToCart();
    await inventory.openCart();
    await inventory.cartShouldContainBackpack();
  });
});
