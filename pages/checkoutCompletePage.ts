import { Page, expect } from '@playwright/test';
import { succesMessage } from '../fixtures/succesMessage';

export class CheckoutCompletePage{
    constructor(protected page: Page){}
    
    confirmationOrder = this.page.locator('*[data-test="complete-header"]')
    backHomeBtn = this.page.locator('*[data-test="back-to-products"]')


    async checkOrder(){
        await expect(this.confirmationOrder).toContainText(succesMessage.succesOrder);
    }

    async clickBackHomeButton(){
        await this.backHomeBtn.click();
    }

}