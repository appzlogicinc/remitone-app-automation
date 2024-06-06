import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import ios_WalletPage from '../pageobjects/ios_walletPage.js';
import ios_loginPage from '../pageobjects/ios_loginPage.js';

describe('Load Wallet', () => {
    it('Verify Load your wallet functionality', async () => {
        await ios_loginPage.clickLoginBtn();
        await ios_loginPage.login();
        chaiExpect(await ios_loginPage.verifyUserLoggedin()).to.be.true;
        await ios_WalletPage.clickWalletBtn();
        chaiExpect(await ios_WalletPage.verifyWalletScreen()).to.be.true;
        await ios_WalletPage.clickLoadWalletButton();
        chaiExpect(await ios_WalletPage.verifyLoadWalletScreen()).to.be.true;
        await ios_WalletPage.enterRequiredFields();
        chaiExpect(await ios_WalletPage.verifyInfoText()).to.be.true;
        chaiExpect(await ios_WalletPage.verifypaymentinfotext()).to.be.true;
        await ios_WalletPage.clickLoadWalletBtn();
        chaiExpect(await ios_WalletPage.verifyReviewScreen()).to.be.true;
        await ios_WalletPage.clickConfirmLoadWalletBtn();
        chaiExpect(await ios_WalletPage.verifyLoadWalletConfirmScreen()).to.be.true;
        await ios_WalletPage.clickMakePaymentBtn();
        chaiExpect(await ios_WalletPage.verifyMakePaymentScreen()).to.be.true;
        chaiExpect(await ios_WalletPage.verifyPaymentMethod()).to.be.true;
    });
});

