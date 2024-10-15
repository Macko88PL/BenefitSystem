import {test} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { YourCartPage } from '../pages/yourCartPage';
import { CheckoutOterviewPage } from '../pages/checkoutOterviewPage';
import { CheckoutYourInformationPage } from '../pages/checkoutYourInformationPage';
import { CheckoutCompletePage } from '../pages/checkoutCompletePage';
import { config } from '../data/config';

test.describe('E2E Buy Dress', ()=>{
    let homePage: HomePage;
    let loginPage: LoginPage;
    let yourCartPage: YourCartPage;
    let checkoutOterviewPage: CheckoutOterviewPage;
    let checkoutYourInformationPage: CheckoutYourInformationPage;
    let checkoutCompletePage: CheckoutCompletePage;

    test.beforeEach(async ({page})=> {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        yourCartPage = new YourCartPage(page);
        checkoutOterviewPage = new CheckoutOterviewPage(page);
        checkoutYourInformationPage = new CheckoutYourInformationPage(page);
        checkoutCompletePage = new CheckoutCompletePage(page);
        await homePage.open()
    })

    test('E2E Buy Product',async ({page}) => {

        await loginPage.checkLoginPage()
        await loginPage.loginUser(config.user, config.password)
        await homePage.checkHomePageProduct();
        await homePage.addRedTshirtToBasket();
        await homePage.checkAddThisrtToBasket();
        await homePage.goToBasket();
        await yourCartPage.checkSelectedItem();
        await yourCartPage.proceedToCheckout();
        await checkoutYourInformationPage.fillInformationData();
        await checkoutYourInformationPage.clickContinueButton();
        await checkoutOterviewPage.checkOterview();
        await checkoutOterviewPage.clickFinishButton();
        await checkoutCompletePage.checkOrder();
        await checkoutCompletePage.clickBackHomeButton();
        await homePage.checkHomePageProduct();
        
    })

    test('E2E Delete product from basket',async ({page}) => {

        await loginPage.loginUser(config.user, config.password)
        await homePage.addRedTshirtToBasket();
        await homePage.goToBasket();
        await yourCartPage.checkSelectedItem();
        await yourCartPage.clickRemoveItemButton();
        await yourCartPage.checkRemovedItem();
        
    })


})