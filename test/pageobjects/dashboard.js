import { $ } from '@wdio/globals';
import Page from './page.js';

class DashboardPage {
    get destinationCountryDropdown() {
        const selector = 'new UiSelector().descriptionContains("Afghanistan")';
        return $(`android=${selector}`);
    }

get sourceCurrencyDropdown()  {
    const selector = 'new UiSelector().description("GBP")';
    return $(`android=${selector}`);
}


    

    get sourceCurrencyField(){
        const selector = 'new UiSelector().description("GBP")';
        return $(`android=${selector}`);
    }

    get destinationCurrencyDropdown() {
        const selector = 'new UiSelector().description("AFN")';
        return $(`android=${selector}`);
    }

    get amountTextField(){
        const selector = 'new UiSelector().text("Amount")';
        return $$(`android=${selector}`);
    }

    get sendNowButton() {
        const selector = 'new UiSelector().description("Send Now")';
        return $(`android=${selector}`);
    }

    get selectBeneficiaryScreen(){
        const selector = 'new UiSelector().descriptionContains("Select Beneficiary")';
        return $(`android=${selector}`);
    }

    get  beneficaryOption(){
        const selector = 'new UiSelector().descriptionContains("ABC")';
        return $(`android=${selector}`);

    }

    get  transactionTypeOption(){
        const selector = 'new UiSelector().descriptionContains("Select Transaction Type")';
        return $(`android=${selector}`);

    }

    get  selectCardTransfer(){
        const selector = 'new UiSelector().descriptionContains("Card Transfer")';
        return $(`android=${selector}`);

    }

    get cardNumber(){
        const selector = 'new UiSelector().textContains("234567, Card Number *")';
        return $(`android=${selector}`);
    }

    get sourceOfIncome(){ //dropdown
        const selector = 'new UiSelector().descriptionContains("Source of Income *")';
        return $(`android=${selector}`);
    }

    get businessOptionFromDropdown(){
        const selector = 'new UiSelector().descriptionContains("Business")';
        return $(`android=${selector}`);

    }

    get purposeOfRemitance(){ //dropdown
        const selector = 'new UiSelector().descriptionContains("Purpose of Remittance *")';
        return $(`android=${selector}`);
    }

    get familyupportOptionFromDropdown(){
        const selector = 'new UiSelector().descriptionContains("Family Support")';
        return $(`android=${selector}`);

    }

    get clickNextButton() {
        const selector = 'new UiSelector().description("Next")';
        return $(`android=${selector}`);
    }


    get selectPaymentMethodScreen(){
        const selector = 'new UiSelector().descriptionContains("Select Payment Method")';
        return $(`android=${selector}`);
    }

    get selectOnBankTransferOption(){
        const selector = 'new UiSelector().descriptionContains("Bank Transfer")';
        return $(`android=${selector}`);
    }

    get verifyCompleteTransactionScreenDisplayed(){
        const selector = 'new UiSelector().descriptionContains("Complete Transaction")';
        return $(`android=${selector}`);
    }

    get amountTextFieldInFinalPaymentScreen(){
        const selector = 'new UiSelector().text("Amount")';
        return $$(`android=${selector}`);
    }

    get clickOnSendNowFinalPaymentScreen(){
        const selector = 'new UiSelector().text("Send Now")';
        return $$(`android=${selector}`);
    }






async clickSendNowButton() {
        await this.sendNowButton.click();
    }

    async enterAmountInTextField() {
        await this.amountTextField[0].click();
        await this.amountTextField[0].setValue('1');

    }

    async verifyDestinationCountryDisplayed(){
        async function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
          console.log('Start');
          await sleep(9000);
          console.log('End');
          return (await this.destinationCountryDropdown).isDisplayed();
}

    async verifySourceCurrencyDisplayed(){
        await this.sourceCurrencyDropdown.waitForExist({ timeout: 5000 });
        return (await this.sourceCurrencyDropdown).isDisplayed();
    }

    async clickOnSourceCurrencyDropdown(){
        await this.sourceCurrencyDropdown.click();
    }

    async verifySelectBeneficiaryScreen(){
        return (await this.selectBeneficiaryScreen).isDisplayed();
    }

    

    

    async verifySelectedBeneficiaryOption(){
        await this.beneficaryOption.click();
}

async verifyTransactionTypeScreen(){
    return (await this.transactionTypeOption).isDisplayed();
}

async clickOnCardTransfer(){
    await this.selectCardTransfer.click();
}



async sourceOfIncomeDropdown(){
    await this.sourceOfIncome.click();
}


async clickOnBusinessOptionFromDropdown(){
    await this.businessOptionFromDropdown.click();
}

async clickOnPurposeDropdown(){
    (await this.purposeOfRemitance).click();
}

async clickOnFamilySupportOption(){
    (await this.familyupportOptionFromDropdown).click();
}

async clickOnNextButton() {
    await this.clickNextButton.click();
}

async verifyPaymentMethodScreen(){
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      console.log('Start');
      await sleep(9000);
      console.log('End');
    return (await this.selectPaymentMethodScreen).isDisplayed();
}

async clickOnBankTransfer(){
    await this.selectOnBankTransferOption.click();
}

async completeTransactionScreen(){
    return await this.verifyCompleteTransactionScreenDisplayed.isDisplayed();
}

async enterAmountInTextFieldInFinalPaymentScreen() {
    await this.amountTextFieldInFinalPaymentScreen[0].click();
    await this.amountTextFieldInFinalPaymentScreen[0].setValue('1.5');

}

async clickSendNowButtonOnFinalPaymentScreen() {
    await this.clickOnSendNowFinalPaymentScreen.click();
}




}

export default new DashboardPage();
