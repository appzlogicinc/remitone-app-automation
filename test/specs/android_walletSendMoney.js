import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';
import WalletPage from '../pageobjects/wallet.page.js';
import BeneficiaryPage from '../pageobjects/beneficiary.page.js';
 
describe('Send to Wallet', () => {
    it('Verify send to wallet functionality', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await WalletPage.clickWalletBtn();
        chaiExpect(await WalletPage.verifyWalletScreen()).to.be.true;
       await WalletPage.clickSendTowallet();
       chaiExpect(await WalletPage.verifysendToWalletScreen()).to.be.true;
       await WalletPage.enterEmailInSearchField();
       chaiExpect(await WalletPage.verifyBeneficiaryDisplyed()).to.be.true;
       await WalletPage.selectBeneficiary();
       chaiExpect(await BeneficiaryPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;
       await BeneficiaryPage.clickSendMoneyBtn();
       chaiExpect(await BeneficiaryPage.paymentMethodScreenDisplay()).to.be.true;
       await BeneficiaryPage.selectPaymentMethod();
       chaiExpect(await BeneficiaryPage.completeTrasactionScreenDisplay()).to.be.true;
       await BeneficiaryPage.selectReceiveCurrency();
       await WalletPage.enterAmountToTransfer();
       await WalletPage.clickSendNowBtn();
       chaiExpect(await BeneficiaryPage.confirmTransactionScreenDisplay()).to.be.true;
     //  await BeneficiaryPage.clickConfirmBtn();
     //  chaiExpect(await WalletPage.confimationCodeFieldDispaly()).to.be.true;
    })
});