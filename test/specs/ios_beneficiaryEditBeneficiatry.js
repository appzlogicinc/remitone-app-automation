import ios_LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import iosBeneficiaryPage from '../pageobjects/ios_BeneficiaryPage.js';
import iosDashboardPage from '../pageobjects/ios_dashboardPage.js';

describe('Benificiary page', () => {
  it('edit beneficiary', async () => {
      await ios_LoginPage.clickLoginBtn();
      await ios_LoginPage.login();
      chaiExpect(await ios_LoginPage.verifyUserLoggedin()).to.be.true;
      await iosBeneficiaryPage.clickBneficiaryButton();
      chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryScreen()).to.be.true;
      await iosDashboardPage.selectBeneficiary();   
      chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;   
      await iosBeneficiaryPage.clickEditBeneficiaryBtn();
      chaiExpect(await iosBeneficiaryPage.verifyEditBeneficiaryScreen()).to.be.true;
      await iosBeneficiaryPage.editDetails();
      await iosBeneficiaryPage.clickSaveBtn();
      chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryUpdatedMsg()).to.be.true;
  }) 
});