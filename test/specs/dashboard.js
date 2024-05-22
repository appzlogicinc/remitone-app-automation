import { expect } from '@wdio/globals'
import BeneficiaryPage from '../pageobjects/beneficiary.page.js'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';
import dashboardPage from '../pageobjects/dashboard.page.js';


describe('Dashboard page', () => {
    it('Send money from dashboard', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        chaiExpect(await dashboardPage.verifyCountryDisplayOnDahboard()).to.be.true;
        await BeneficiaryPage.enterAmountToTransfer();
        chaiExpect(await dashboardPage.verifyExchangeRateDisplay()).to.be.true;
      //  chaiExpect(await dashboardPage.verifyTransferFee()).to.be.true;  
        await dashboardPage.ClickSendNowBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
        await BeneficiaryPage.clickOnBeneficiary();
        chaiExpect(await BeneficiaryPage.verifyTransactionTypeScreenDisply()).to.be.true;
        await BeneficiaryPage.selectCardTransferTransactionType();
        chaiExpect(await BeneficiaryPage.verifyCardTransferScreenDisply()).to.be.true;
        await BeneficiaryPage.fillCardTransferForm();
        chaiExpect(await BeneficiaryPage.paymentMethodScreenDisplay()).to.be.true;
        await BeneficiaryPage.selectPaymentMethod();
        chaiExpect(await BeneficiaryPage.completeTrasactionScreenDisplay()).to.be.true;
        await BeneficiaryPage.clickSendNowBtn();
        chaiExpect(await BeneficiaryPage.confirmTransactionScreenDisplay()).to.be.true;
      //  await BeneficiaryPage.clickConfirmBtn();
       // chaiExpect(await BeneficiaryPage.transactionCreationMsgDisplayed()).to.be.true;

    }) 

});