import { expect } from '@wdio/globals'
import BeneficiaryPage from '../pageobjects/beneficiary.page.js'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';

// describe('Benificiary page', () => {
//     it('add beneficiary', async () => {
//        // await LoginPage.clickLoginBtn();
//         //await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
//         await BeneficiaryPage.clickBeneficiaryBtn();
//         chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
//         await BeneficiaryPage.clickAddbeneficiaryBtn();
//         chaiExpect(await BeneficiaryPage.verifyAddBeneficiaryScreenDisply()).to.be.true;
//          await BeneficiaryPage.enterBeneficiaryDetails();
//          await BeneficiaryPage.clickSaveBtn();
//          chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
//          chaiExpect(await BeneficiaryPage.verifyBeneficiaryAdded()).to.be.true;
//     }) 
// });

describe('Benificiary page', () => {
    it('verify that user is able to send money through beneficiary screen', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        await BeneficiaryPage.clickBeneficiaryBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
        await BeneficiaryPage.clickOnBeneficiary();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;
        await BeneficiaryPage.clickSendMoneyBtn();
        chaiExpect(await BeneficiaryPage.verifyTransactionTypeScreenDisply()).to.be.true;
        await BeneficiaryPage.selectCashCollectionTrasactionType();
        chaiExpect(await BeneficiaryPage.verifyCashCollectionScreenDisply()).to.be.true;
        await BeneficiaryPage.fillCashcollectionForm();
    
    }) 
});




