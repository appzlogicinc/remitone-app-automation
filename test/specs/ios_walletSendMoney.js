import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import ios_WalletPage from '../pageobjects/ios_walletPage.js';
import ios_loginPage from '../pageobjects/ios_loginPage.js';

describe('Send to Wallet', () => {
    it('Verify send to wallet functionality', async () => {
        await ios_loginPage.clickLoginBtn();
        await ios_loginPage.login();
        chaiExpect(await ios_loginPage.verifyUserLoggedin()).to.be.true;
        await ios_WalletPage.clickWalletBtn();
        chaiExpect(await ios_WalletPage.verifyWalletScreen()).to.be.true;
       await ios_WalletPage.clickSendTowallet();
       chaiExpect(await ios_WalletPage.verifysendToWalletScreen()).to.be.true;
       await ios_WalletPage.enterEmailInSearchField();
       chaiExpect(await ios_WalletPage.verifyBeneficiaryDisplyed()).to.be.true;
       await ios_WalletPage.selectBeneficiary();
       chaiExpect(await ios_WalletPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;
       await ios_WalletPage.clickSendMoneyBtn();
       chaiExpect(await ios_WalletPage.paymentMethodScreenDisplay()).to.be.true;
       await ios_WalletPage.selectPaymentOption();
       chaiExpect(await ios_WalletPage.completeTrasactionScreenDisplay()).to.be.true;
       await ios_WalletPage.selectReceiveCurrency();
       await ios_WalletPage.enterAmountToTransfer();
       await ios_WalletPage.clickSendNowBtn();
       chaiExpect(await ios_WalletPage.confirmTransactionScreenDisplay()).to.be.true;
    //   await ios_WalletPage.clickConfirmBtn();
     //  chaiExpect(await WalletPage.confimationCodeFieldDispaly()).to.be.true;
    })
});


