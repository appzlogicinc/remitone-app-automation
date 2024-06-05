import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';
import dashboardPage from '../pageobjects/dashboard.page.js';
import BeneficiaryPage from '../pageobjects/beneficiary.page.js';



describe('Update Profile', () => {
    it('profile Update', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login();
        chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await dashboardPage.clickProfileBtn();
        chaiExpect(await dashboardPage.verifyProfileScreen()).to.be.true;
        await dashboardPage.clickEditProfileBtn();
        chaiExpect(await dashboardPage.verifyEditProfileScreen()).to.be.true;
        await BeneficiaryPage.editDetailsInProfile();
        await BeneficiaryPage.clickSaveBtn();
      //  chaiExpect(await dashboardPage.verifyUpdatedProfileMessage()).to.be.true;
    }) 

});