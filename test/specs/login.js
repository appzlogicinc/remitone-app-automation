import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';

describe('Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;

    })
   
});

describe('Logout', () => {
    it('should able logout', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
        await LoginPage.clickMoreBtn();
        await LoginPage.clickLogoutBtn();
        await LoginPage.clickOkBtn();
      chaiExpect(await LoginPage.verifyUserLoggedOut()).to.be.true;

    })
});

