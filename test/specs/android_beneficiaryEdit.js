import { expect } from '@wdio/globals'
import BeneficiaryPage from '../pageobjects/beneficiary.page.js'
import LoginPage from '../pageobjects/login.page.js'
import dashboardPage from '../pageobjects/dashboard.page.js'
import { expect as chaiExpect, should } from 'chai';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import beneficiaryPage from '../pageobjects/beneficiary.page.js';

describe('Benificiary page', () => {
    it('edit beneficiary', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await BeneficiaryPage.clickBeneficiaryBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryScreenDisply()).to.be.true;
        await dashboardPage.clickOnBeneficiary();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;   
        await BeneficiaryPage.clickEditBeneficiaryBtn();
        chaiExpect(await beneficiaryPage.verifyEditBeneficiaryScreen()).to.be.true;
        await BeneficiaryPage.editDetails();
        await BeneficiaryPage.clickSaveBtn();
        chaiExpect(await BeneficiaryPage.verifyBeneficiaryUpdatedMsg()).to.be.true;
    }) 
});