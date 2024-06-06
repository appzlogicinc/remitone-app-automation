import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';
import WalletPage from '../pageobjects/wallet.page.js';
 
describe('Move funds', () => {
    it('Verify move funds functionality', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await WalletPage.clickWalletBtn();
        chaiExpect(await WalletPage.verifyWalletScreen()).to.be.true;
       await WalletPage.clickMoveButton();
       chaiExpect(await WalletPage.verifyMoveFundsScreen()).to.be.true;
       chaiExpect(await WalletPage.verifyMoveFundInfoText()).to.be.true;
       await WalletPage.enterCurrencyDetails();
       await WalletPage.clickMoveFundsbutton();
       chaiExpect(await WalletPage.verifyInsufficientFundsMsg()).to.be.true;
    })
});