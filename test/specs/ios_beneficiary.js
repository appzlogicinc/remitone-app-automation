import ios_LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import iosBeneficiaryPage from '../pageobjects/ios_BeneficiaryPage.js';
import iosDashboardPage from '../pageobjects/ios_dashboardPage.js';


beforeEach(async () => {
  console.log('Launching the app');
  await driver.launchApp();
  await ios_LoginPage.clickLoginBtn();
  await ios_LoginPage.login();
  chaiExpect(await ios_LoginPage.verifyUserLoggedin()).to.be.true;
  await iosBeneficiaryPage.clickBneficiaryButton();
  chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryScreen()).to.be.true;
});

afterEach(async () => {
 console.log('app closing');
 await driver.closeApp();
});

describe('Benificiary page', () => {
  it('add beneficiary', async () => {
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

describe('Benificiary page', () => {
  it('edit beneficiary', async () => {
    await iosDashboardPage.selectBeneficiary();   
    chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;   
      await iosBeneficiaryPage.clickEditBeneficiaryBtn();
      chaiExpect(await iosBeneficiaryPage.verifyEditBeneficiaryScreen()).to.be.true;
      await iosBeneficiaryPage.editDetails();
      await iosBeneficiaryPage.clickSaveBtn();
      chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryUpdatedMsg()).to.be.true;
  }) 
});

describe('Benificiary page', () => {
  it('verify that user is able to send money through beneficiary screen', async () => {
      await iosDashboardPage.selectBeneficiary();
      chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryDetailsScreenDisply()).to.be.true;
      await iosBeneficiaryPage.clickSendMoneyBtn();
      await iosDashboardPage.clickCardTransfer();
      chaiExpect(await iosDashboardPage.verifyCardTransferScreenDisply()).to.be.true;
      await iosDashboardPage.fillCardTransferForm();
      chaiExpect(await iosDashboardPage.paymentMethodScreenDisplay()).to.be.true;
      await iosDashboardPage.selectPaymentMethod();
      chaiExpect(await iosDashboardPage.completeTrasactionScreenDisplay()).to.be.true;
      await iosBeneficiaryPage.enterAmountToTransfer();
      await iosDashboardPage.clickSendNowBtn();
      chaiExpect(await iosDashboardPage.confirmTransactionScreenDisplay()).to.be.true;
     await iosDashboardPage.clickConfirmBtn();
     chaiExpect(await iosDashboardPage.transactionCreationMsgDisplyed()).to.be.true;
     chaiExpect(await iosDashboardPage.transactionDetailsScreenDisplay()).to.be.true;
     await iosDashboardPage.clickMakePaymentBtn();
     chaiExpect(await iosDashboardPage.worldPayScreenDisplayed()).to.be.true;
    }) 
});