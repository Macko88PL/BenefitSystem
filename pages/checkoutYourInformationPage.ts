import { Page, expect } from '@playwright/test';
import { config } from '../data/config';

export class CheckoutYourInformationPage{
    constructor(protected page: Page){}

    firstName = this.page.locator('*[data-test="firstName"]');
    lastName = this.page.locator('*[data-test="lastName"]');
    postalCode = this.page.locator('*[data-test="postalCode"]');
    continueBtn = this.page.locator('*[data-test="continue"]');


    async fillInformationData(){
        const firstName = config.firstName;
        const lastName = config.lastName;
        const postalCode = config.postalCode;

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

        return{firstName, lastName,  postalCode,}
    }

    async clickContinueButton(){
        await this.continueBtn.click();
    }
}