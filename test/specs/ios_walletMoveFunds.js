import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import ios_WalletPage from '../pageobjects/ios_walletPage.js';
import ios_loginPage from '../pageobjects/ios_loginPage.js';

describe('Move funds', () => {
    it('Verify move funds functionality', async () => {
        await ios_loginPage.clickLoginBtn();
        await ios_loginPage.login();
        chaiExpect(await ios_loginPage.verifyUserLoggedin()).to.be.true;
        await ios_WalletPage.clickWalletBtn();
        chaiExpect(await ios_WalletPage.verifyWalletScreen()).to.be.true;
       await ios_WalletPage.clickMoveButton();
       chaiExpect(await ios_WalletPage.verifyMoveFundsScreen()).to.be.true;
       chaiExpect(await ios_WalletPage.verifyMoveFundInfoText()).to.be.true;
       await ios_WalletPage.enterCurrencyDetails();
       await ios_WalletPage.clickMoveFundsbutton();
       chaiExpect(await ios_WalletPage.verifyInsufficientFundsMsg()).to.be.true;
    })
});