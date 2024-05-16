import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import WalletPage from '../pageobjects/wallet.page.js';

import { expect as chaiExpect, should } from 'chai';

describe('Login ', function() {
        it('should login with valid credentials', async () => {     
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
    })

    it('should able logout', async () => {
        await LoginPage.clickMoreBtn();
        await LoginPage.clickLogoutBtn();
        await LoginPage.clickOkBtn();
        chaiExpect(await LoginPage.verifyUserLoggedOut()).to.be.true;
    })

});