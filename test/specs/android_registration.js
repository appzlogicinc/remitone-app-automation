import { expect } from '@wdio/globals'
import RegistrationPage from '../pageobjects/registration.page.js'
import { expect as chaiExpect, should } from 'chai';
import registrationPage from '../pageobjects/registration.page.js';


describe('Registration page', () => {
    it('Registerting a new user', async () => {
        await registrationPage.clickSignUpButton();
        await registrationPage.selectCountry('United Kingdom');
        await registrationPage.clickNextButton();
        chaiExpect(await registrationPage.verifySecurityScreenDisplayed()).to.be.true;
        await registrationPage.enterSecurityPin();
        await registrationPage.clickNextButton();
        chaiExpect(await registrationPage.verifyRegistrationOptionsScreenDisplayed()).to.be.true;
        await registrationPage.clickNextButton();
        chaiExpect(await registrationPage.verifySignUpScreenDisplayed()).to.be.true;
        await registrationPage.enterEmail();
        await registrationPage.enterPassword();
        await registrationPage.enterConfirmPassword();
        await registrationPage.enterFirstName();
        await registrationPage.enterLastName();
        await registrationPage.selectDateOfBirth();
        await registrationPage.selectNationality();
        await registrationPage.enterAddress();
        await registrationPage.enterPincodeinField();
        await registrationPage.enterMobileNumber();
        await registrationPage.selectCheckbox();
        await registrationPage.clickOnSignUpButton();
        chaiExpect(await registrationPage.verifyRegistrationSuccessfulPopupDisplayed()).to.be.true;
        await registrationPage.clickOnloginNowButton();
        chaiExpect(await registrationPage.verifyUserIsLoggedIn()).to.be.true;
    }) 
});

