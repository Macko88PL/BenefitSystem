import { Page, expect } from '@playwright/test';
import { assertsData } from '../fixtures/assertsDate';

export class YourCartPage{
    constructor(protected page: Page){}

    selectedProductLabel = this.page.locator('*[data-test="inventory-item-name"]');
    priceLabel = this.page.locator('*[data-test="inventory-item-price"]');
    checkoutBtn = this.page.locator('*[data-test="checkout"]');
    removeItemBtn = this.page.locator('*[data-test="remove-test.allthethings()-t-shirt-(red)"]');

    oczekiwanie = 15000

    async checkSelectedItem(){
        await expect(this.selectedProductLabel).toBeVisible({timeout: this.oczekiwanie});
        await expect(this.selectedProductLabel).toContainText(assertsData.redTshirt);
        await expect(this.priceLabel).toContainText(assertsData.priceRedTshirt);
    }

    async proceedToCheckout(){
        await this.checkoutBtn.click();
    }

    async clickRemoveItemButton(){
        await this.removeItemBtn.click();
    }

    async checkRemovedItem(){
        await expect(this.selectedProductLabel).not.toBeVisible({timeout: this.oczekiwanie});
    }
}