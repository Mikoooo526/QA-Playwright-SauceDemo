import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async assertLoggedIn() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }

  async addBackpackToCart() {
    const item = this.page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
    await item.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart() { await this.page.locator('.shopping_cart_link').click(); }

  async cartShouldContainBackpack() {
    await expect(this.page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
  }
}
