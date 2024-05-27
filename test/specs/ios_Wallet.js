import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import ios_WalletPage from '../pageobjects/ios_walletPage.js';
import ios_loginPage from '../pageobjects/ios_loginPage.js';

beforeEach(async () => {
    console.log('Launching the app');
    await driver.launchApp();
    await ios_loginPage.clickLoginBtn();
        await ios_loginPage.login();
        chaiExpect(await ios_loginPage.verifyUserLoggedin()).to.be.true;
        await ios_WalletPage.clickWalletBtn();
   chaiExpect(await ios_WalletPage.verifyWalletScreen()).to.be.true;
});

afterEach(async () => {
    console.log('app closing');
    await driver.closeApp();
});

describe('Load Wallet', () => {
    it('Verify Load your wallet functionality', async () => {
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
    })
});

    describe('Move funds', () => {
        it('Verify move funds functionality', async () => {
           await ios_WalletPage.clickMoveButton();
           chaiExpect(await ios_WalletPage.verifyMoveFundsScreen()).to.be.true;
           chaiExpect(await ios_WalletPage.verifyMoveFundInfoText()).to.be.true;
           await ios_WalletPage.enterCurrencyDetails();
           await ios_WalletPage.clickMoveFundsbutton();
           chaiExpect(await ios_WalletPage.verifyInsufficientFundsMsg()).to.be.true;
        })
    });

    describe('Send to Wallet', () => {
        it('Verify send to wallet functionality', async () => {
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


