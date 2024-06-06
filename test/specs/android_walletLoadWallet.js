import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';
import WalletPage from '../pageobjects/wallet.page.js';
import BeneficiaryPage from '../pageobjects/beneficiary.page.js';
 
describe('Load Wallet', () => {
    it('Verify Load your wallet functionality', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await WalletPage.clickWalletBtn();
        chaiExpect(await WalletPage.verifyWalletScreen()).to.be.true;
       await WalletPage.clickLoadWalletButton();
       chaiExpect(await WalletPage.verifyLoadWalletScreen()).to.be.true;
       await WalletPage.enterRequiredFields();
       chaiExpect(await WalletPage.verifyInfoText()).to.be.true;
       chaiExpect(await WalletPage.verifypaymentinfotext()).to.be.true;
       await WalletPage.clickLoadWalletBtn();
       chaiExpect(await WalletPage.verifyReviewScreen()).to.be.true;
       await WalletPage.clickConfirmLoadWalletBtn();
       chaiExpect(await WalletPage.verifyLoadWalletConfirmScreen()).to.be.true;
       await WalletPage.clickMakePaymentBtn();
       chaiExpect(await WalletPage.verifyMakePaymentScreen()).to.be.true; 
       chaiExpect(await WalletPage.verifyPaymentMethod()).to.be.true;
    });
});
