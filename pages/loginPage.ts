import { Page, expect } from '@playwright/test';
import { config } from '../data/config';

//logowanie na stronę
export class LoginPage{
    constructor(protected page: Page){}

    userName = this.page.locator('#user-name')
    password = this.page.locator('#password')
    loginBtn = this.page.locator('#login-button')

     oczekiwanie = 10000;

    async checkLoginPage(){
        await expect(this.userName).toBeEnabled({timeout: this.oczekiwanie});
        await expect(this.password).toBeEnabled({timeout: this.oczekiwanie});
        await expect(this.loginBtn).toBeEnabled({timeout: this.oczekiwanie});
    }

    async loginUser(user, password){
        
        await this.userName.fill(user);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

}