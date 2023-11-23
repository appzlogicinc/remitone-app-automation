import { expect } from '@wdio/globals'
import BeneficiaryPage from '../pageobjects/beneficiary.page.js'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';

describe('Verify Benificiary page', () => {
    it('add beneficiary', async () => {
       // await LoginPage.clickLoginBtn();
        //await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
        await BeneficiaryPage.clickBeneficiaryBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
        await BeneficiaryPage.clickAddbeneficiaryBtn();
        chaiExpect(await BeneficiaryPage.verifyAddBeneficiaryScreenDisply()).to.be.true;
         await BeneficiaryPage.enterBeneficiaryDetails("csmith","test","1234567890","test","test","test","123456");
         await BeneficiaryPage.clickSaveBtn();
         chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
         chaiExpect(await BeneficiaryPage.verifyBeneficiaryAdded()).to.be.true;
    }) 
})


