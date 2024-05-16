import { expect } from '@wdio/globals'
import ios_LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import iosDashboardPage from '../pageobjects/ios_dashboardPage.js';

describe('Dashboard page', () => {
    it('Send money from dashboard', async () => {
        await ios_LoginPage.clickLoginBtn();
        await ios_LoginPage.login();
        chaiExpect(await ios_LoginPage.verifyUserLoggedin()).to.be.true;
        await iosDashboardPage.clickCountryDropdown();
        await iosDashboardPage.selectCountry();
        chaiExpect(await iosDashboardPage.selectedCounteryDisplayed()).to.be.true;
        await iosDashboardPage.enterAmount();
        await iosDashboardPage.clickSendNowBtn()
        chaiExpect(await iosDashboardPage.beneficiaryScreenDisplayed()).to.be.true;  
        await iosDashboardPage.selectBeneficiary();
        chaiExpect(await iosDashboardPage.beneficiaryTypeScreenDisplayed()).to.be.true;
        await iosDashboardPage.clickCardTrasnfer();
        chaiExpect(await iosDashboardPage.verifyCardTransferScreenDisply()).to.be.true;
        await iosDashboardPage.fillCardTransferForm();
        chaiExpect(await iosDashboardPage.paymentMethodScreenDisplay()).to.be.true;
        await iosDashboardPage.selectPaymentMethod();
        chaiExpect(await iosDashboardPage.completeTrasactionScreenDisplay()).to.be.true;
        await iosDashboardPage.clickSendButton();
    }) 

});