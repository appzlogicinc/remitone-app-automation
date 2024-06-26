import { expect } from '@wdio/globals'
import BeneficiaryPage from '../pageobjects/beneficiary.page.js'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';


describe('Benificiary page', () => {
    it('verify that user is able to send money through beneficiary screen', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await BeneficiaryPage.clickBeneficiaryBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
        await BeneficiaryPage.clickOnBeneficiary();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;
        await BeneficiaryPage.clickSendMoneyBtn();
        chaiExpect(await BeneficiaryPage.verifyTransactionTypeScreenDisply()).to.be.true;
        await BeneficiaryPage.selectCardTransferTransactionType();
        chaiExpect(await BeneficiaryPage.verifyCardTransferScreenDisply()).to.be.true;
        await BeneficiaryPage.fillCardTransferForm();
        chaiExpect(await BeneficiaryPage.paymentMethodScreenDisplay()).to.be.true;
       await BeneficiaryPage.selectPaymentMethod();
       chaiExpect(await BeneficiaryPage.completeTrasactionScreenDisplay()).to.be.true;
       await BeneficiaryPage.enterAmountToTransfer();
       await BeneficiaryPage.clickSendNowBtn();
       chaiExpect(await BeneficiaryPage.confirmTransactionScreenDisplay()).to.be.true;
       await BeneficiaryPage.clickConfirmBtn();
       chaiExpect(await BeneficiaryPage.transactionCreationMsgDisplayed()).to.be.true;
       chaiExpect(await BeneficiaryPage.transactionDetailScreenDisplay()).to.be.true;
       chaiExpect(await BeneficiaryPage.trasactionNoDisplay()).to.be.true;
       await BeneficiaryPage.clickMakePaymentBtn();
       chaiExpect(await BeneficiaryPage.makePaymentScreenDisplay()).to.be.true;
   }) 
});