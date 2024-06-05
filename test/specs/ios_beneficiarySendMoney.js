import ios_LoginPage from '../pageobjects/ios_loginPage.js'
import { expect as chaiExpect, should } from 'chai';
import iosBeneficiaryPage from '../pageobjects/ios_BeneficiaryPage.js';
import iosDashboardPage from '../pageobjects/ios_dashboardPage.js';

describe('Benificiary page', () => {
  it('verify that user is able to send money through beneficiary screen', async () => {
       await ios_LoginPage.clickLoginBtn();
      await ios_LoginPage.login();
      chaiExpect(await ios_LoginPage.verifyUserLoggedin()).to.be.true;
      await iosBeneficiaryPage.clickBneficiaryButton();
      chaiExpect(await iosBeneficiaryPage.verifyBeneficiaryScreen()).to.be.true;
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