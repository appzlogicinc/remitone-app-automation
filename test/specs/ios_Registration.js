import { expect } from '@wdio/globals'
import iosRegistrationPage from '../pageobjects/ios_Registration.Page.js'
import { expect as chaiExpect, should } from 'chai';
import registrationPage from '../pageobjects/registration.page.js';


describe('Registration page', () => {
    it('Registerting a new user', async () => {
        await iosRegistrationPage.clickSignUpButton();
        await iosRegistrationPage.selectCountry('United Kingdom');
        await iosRegistrationPage.clickNextButton();
        chaiExpect(await iosRegistrationPage.verifySecurityScreenDisplayed()).to.be.true;
        await iosRegistrationPage.enterSecurityPin();
        await iosRegistrationPage.clickNextButton();
        chaiExpect(await iosRegistrationPage.verifyRegistrationOptionsScreenDisplayed()).to.be.true;
        await iosRegistrationPage.clickNextButton();
        chaiExpect(await iosRegistrationPage.verifySignUpScreenDisplayed()).to.be.true;
        await iosRegistrationPage.enterEmail();
        await iosRegistrationPage.enterPassword();
        await iosRegistrationPage.enterConfirmPassword();
        await iosRegistrationPage.enterFirstName();
        await iosRegistrationPage.enterLastName();
        await iosRegistrationPage.selectDateOfBirth();
        await iosRegistrationPage.selectNationality();
        await iosRegistrationPage.enterAddress();
        await iosRegistrationPage.enterPincodeinField();
        await iosRegistrationPage.enterMobileNumber();
        await iosRegistrationPage.selectCheckbox();
        await iosRegistrationPage.clickOnSignUpButton();
        chaiExpect(await iosRegistrationPage.verifyRegistrationSuccessfulPopupDisplayed()).to.be.true;
        await iosRegistrationPage.clickOnloginNowButton();
        chaiExpect(await iosRegistrationPage.verifyUserIsLoggedIn()).to.be.true;
    }) 
});

