import { Page, expect } from '@playwright/test';

export class HomePage{
    constructor(protected page: Page){}

    produktLabel = this.page.locator('*[data-test="title"]')
    redTshirt = this.page.locator('*[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    labsOnesie = this.page.locator('*[data-test="add-to-cart-sauce-labs-onesie"]')
    fleeceJacket = this.page.locator('*[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    boltTshirt = this.page.locator('*[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    bikeLight = this.page.locator('*[data-test="add-to-cart-sauce-labs-bike-light"]')
    labsBackpack = this.page.locator('*[data-test="add-to-cart-sauce-labs-backpack"]')
    checkAddBasketRedTshirt = this.page.locator('*[data-test="remove-test.allthethings()-t-shirt-(red)"]')
    basketBtn = this.page.locator('*[data-test="shopping-cart-link"]')


    oczekiwanie = 15000

    async open(){
        await this.page.goto("");
    }

    async checkHomePageProduct(){
        await expect(this.produktLabel).toBeVisible({timeout: this.oczekiwanie});
        await expect(this.redTshirt).toBeVisible({timeout: this.oczekiwanie});
        await expect(this.labsOnesie).toBeVisible({timeout: this.oczekiwanie});
        await expect(this.fleeceJacket).toBeVisible({timeout: this.oczekiwanie});
        await expect(this.boltTshirt).toBeVisible({timeout: this.oczekiwanie});
        await expect(this.bikeLight).toBeVisible({timeout: this.oczekiwanie});
        await expect(this.labsBackpack).toBeVisible({timeout: this.oczekiwanie});
    }

    async addRedTshirtToBasket(){
        await this.redTshirt.click();
    }

    async checkAddThisrtToBasket(){
        expect(this.checkAddBasketRedTshirt).toBeVisible
    }

    async goToBasket(){
        await this.basketBtn.click();
    }

}