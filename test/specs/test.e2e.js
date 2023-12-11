import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('User Login', () => {
    it('User should login with valid credentials', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');

    })

 
});

describe('User logout', () => {

    it('User should be able to logout ', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
        //await LoginPage.clickMoreBtn();
        await LoginPage.clickLogoutBtn();
        await LoginPage.clickOkBtn();
    })
   
});





