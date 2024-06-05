import { expect } from '@wdio/globals'
import BeneficiaryPage from '../pageobjects/beneficiary.page.js'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';

describe('Benificiary page', () => {
    it('add beneficiary', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await BeneficiaryPage.clickBeneficiaryBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
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


