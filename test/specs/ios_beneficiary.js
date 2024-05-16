import ios_LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import iosBeneficiaryPage from '../pageobjects/ios_BeneficiaryPage.js';


describe('Beneficiary page', () => {
    it('Add new beneficiary', async () => {
        await ios_LoginPage.clickLoginBtn();
        await ios_LoginPage.login();
        chaiExpect(await ios_LoginPage.verifyUserLoggedin()).to.be.true;
        await iosBeneficiaryPage.clickBneficiaryButton();
      //  chaiExpect(iosBeneficiaryPage.verifyBeneficiaryScreen()).to.be.true;
        await iosBeneficiaryPage.clickAddbenificiaryButton();
        await iosBeneficiaryPage.enterBeneficiaryDetails();
    }) 

});