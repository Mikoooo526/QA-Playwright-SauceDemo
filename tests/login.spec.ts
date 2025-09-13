import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { users } from '../fixtures/users';

test.describe('Login @smoke', () => {
  test('poprawne logowanie', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(users.valid.username, users.valid.password);
    await inventory.assertLoggedIn();
  });

  test('błąd przy niepoprawnych danych', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.invalid.username, users.invalid.password);
    await login.expectError('Username and password do not match');
  });

  test('użytkownik zablokowany', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.locked.username, users.locked.password);
    await login.expectError('Sorry, this user has been locked out');
  });
});
