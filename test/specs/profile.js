import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';
import dashboardPage from '../pageobjects/dashboard.page.js';
import BeneficiaryPage from '../pageobjects/beneficiary.page.js';



describe('Dashboard page', () => {
    it('Send money from dashboard', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await dashboardPage.clickProfileBtn();
        chaiExpect(await dashboardPage.verifyProfileScreen()).to.be.true;
        await dashboardPage.clickEditProfileBtn();
        chaiExpect(await dashboardPage.verifyEditProfileScreen()).to.be.true;
        await BeneficiaryPage.editDetails();
        await BeneficiaryPage.clickSaveBtn();
        chaiExpect(await dashboardPage.verifyUpdatedProfileMessage()).to.be.true;
    }) 

});