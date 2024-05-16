import { expect } from '@wdio/globals'
import { expect as chaiExpect, should } from 'chai';
import iosLoginPage from '../pageobjects/ios_loginPage.js'

describe('Login and logout', () => {
    it('should login with valid credentials', async () => {
        await iosLoginPage.clickLoginBtn();
        await iosLoginPage.login();
        chaiExpect(await iosLoginPage.verifyUserLoggedin()).to.be.true;

    })

    it('should able logout', async () => {
        await iosLoginPage.clickMoreBtn();
        await iosLoginPage.clickLogoutBtn();
        await iosLoginPage.clickOkBtn();
        chaiExpect(await iosLoginPage.verifyUserLoggedOut()).to.be.true;
})
})
