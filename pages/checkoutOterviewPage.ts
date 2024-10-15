import { Page, expect } from '@playwright/test';
import { assertsData } from '../fixtures/assertsDate';

export class CheckoutOterviewPage{
    constructor(protected page: Page){}

    finishBtn = this.page.locator('*[data-test="finish"]')
    selectedItemLabel = this.page.locator('*[data-test="inventory-item-name"]')
    itemPrice = this.page.locator('*[data-test="inventory-item-price"]')

    async clickFinishButton(){
        await this.finishBtn.click();
    }

    async checkOterview(){
        await expect(this.selectedItemLabel).toContainText(assertsData.redTshirt)
        await expect(this.itemPrice).toContainText(assertsData.priceRedTshirt)
    }

}