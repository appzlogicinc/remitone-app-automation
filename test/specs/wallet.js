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
       await WalletPage.clickCanclePaymentBtn();
       chaiExpect(await WalletPage.verifyCancellationText()).to.be.true;
       await WalletPage.clickCancleConfirmBtn();  
       chaiExpect(await WalletPage.verifyCancelTransferMessage()).to.be.true;  
       chaiExpect(await WalletPage.verifyWalletScreen()).to.be.true;  
    })
});

describe('Load Wallet', () => {
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
})

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
       await BeneficiaryPage.enterAmountToTransfer();
       await BeneficiaryPage.clickSendNowBtn();
    })
})

