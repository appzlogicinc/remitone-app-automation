import { expect } from '@wdio/globals';
import DashboardPage from '../pageobjects/dashboard.js'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';

describe('Dashboard', () => {

    it('verify user is able to send money to end user from home-screen', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('swasti.sharma@appzlogic.com', 'Appzlogic@123'); 
        chaiExpect(await DashboardPage.verifyDestinationCountryDisplayed()).to.be.true;
        //chaiExpect(await DashboardPage.verifySourceCurrencyDisplayed()).to.be.true;
        await DashboardPage.enterAmountInTextField();
        await DashboardPage.clickSendNowButton();
        chaiExpect(await DashboardPage.verifySelectBeneficiaryScreen()).to.be.true;
        await DashboardPage.verifySelectedBeneficiaryOption();
        chaiExpect(await DashboardPage.verifyTransactionTypeScreen()).to.be.true;
        await DashboardPage.clickOnCardTransfer();
        await DashboardPage.sourceOfIncomeDropdown();
        
        await DashboardPage.clickOnBusinessOptionFromDropdown();
        await DashboardPage.clickOnPurposeDropdown();
        
        await DashboardPage.clickOnFamilySupportOption();
        await DashboardPage.clickOnNextButton();
        chaiExpect(await DashboardPage.verifyPaymentMethodScreen()).to.be.true;
        await DashboardPage.clickOnBankTransfer();
        chaiExpect(await DashboardPage.completeTransactionScreen()).to.be.true;
        await DashboardPage.enterAmountInTextFieldInFinalPaymentScreen();
        await DashboardPage.clickSendNowButtonOnFinalPaymentScreen();
    })
});
