import ios_LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import iosBeneficiaryPage from '../pageobjects/ios_BeneficiaryPage.js';

describe('Benificiary page', () => {
  it('add beneficiary', async () => {
      await ios_LoginPage.clickLoginBtn();
      await ios_LoginPage.login();
      chaiExpect(await ios_LoginPage.verifyUserLoggedin()).to.be.true;
      await iosBeneficiaryPage.clickBneficiaryButton();
      chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryScreen()).to.be.true;
      await iosBeneficiaryPage.clickAddbenificiaryButton();
      chaiExpect(await iosBeneficiaryPage.verifyAddBeneficiaryScreenDisply()).to.be.true;
      await iosBeneficiaryPage.enterFirstName();
      await iosBeneficiaryPage.enterLastName();
      await iosBeneficiaryPage.enterMobileNo();
      await iosBeneficiaryPage.enterAddress();
      await iosBeneficiaryPage.enterZipcode();
      await iosBeneficiaryPage.selectIdentificationType();
      await iosBeneficiaryPage.clickSaveBtn();
     chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryAdded()).to.be.true;
  }) 

});