import { expect } from '@wdio/globals'
import BeneficiaryPage from '../pageobjects/beneficiary.page.js'
import LoginPage from '../pageobjects/login.page.js'
import dashboardPage from '../pageobjects/dashboard.page.js'
import { expect as chaiExpect, should } from 'chai';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import beneficiaryPage from '../pageobjects/beneficiary.page.js';

const argv = yargs(hideBin(process.argv)).argv;

beforeEach(async () => {
       console.log('Launching the app');
       await driver.launchApp();
       await LoginPage.clickLoginBtn();
       await LoginPage.login();
       chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
       await BeneficiaryPage.clickBeneficiaryBtn();
       chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
});

afterEach(async () => {
      console.log('app closing');
      await driver.closeApp();
});

describe('Benificiary page', () => {
    it('add beneficiary', async () => {
        await BeneficiaryPage.clickAddbeneficiaryBtn();
        chaiExpect(await BeneficiaryPage.verifyAddBeneficiaryScreenDisply()).to.be.true;
        await BeneficiaryPage.enterFirstName();
        await BeneficiaryPage.enterLastName();
        await BeneficiaryPage.enterMobileNo();
        await BeneficiaryPage.enterAddress();
        await BeneficiaryPage.enterZipcode();
        await BeneficiaryPage.selectIdentificationType();
        await BeneficiaryPage.clickSaveBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryAdded()).to.be.true;
    }) 

});
 
// describe('Benificiary page', () => {
//     it('Search beneficiary', async () => {
//         await BeneficiaryPage.enterBeneficiaryName();

        
//     }) 

// });


describe('Benificiary page', () => {
    it('edit beneficiary', async () => {
        await dashboardPage.clickOnBeneficiary();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;   
        await BeneficiaryPage.clickEditBeneficiaryBtn();
        chaiExpect(await beneficiaryPage.verifyEditBeneficiaryScreen()).to.be.true;
        await BeneficiaryPage.editDetails();
        await BeneficiaryPage.clickSaveBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryUpdatedMsg()).to.be.true;
    }) 
});

describe('Benificiary page', () => {
    it('verify that user is able to send money through beneficiary screen', async () => {
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