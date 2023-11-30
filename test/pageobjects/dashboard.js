import { $ } from '@wdio/globals';
import Page from './page.js';

class DashboardPage {
    get destinationCountryDropdown() {
        const selector = 'new UiSelector().descriptionContains("Afghanistan")';
        return $(`android=${selector}`);
    }

    get sourceCurrencyDropdown() {
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
        const selector = 'new UiSelector().description("Select Beneficiary")';
        return $(`android=${selector}`);
    }

    async clickSendNowButton() {
        await this.sendNowButton.click();
    }

    async enterAmountInTextField() {
        await this.amountTextField[0].click();
        await this.amountTextField[0].setValue('1');

    }

    async verifyDestinationCountryDisplayed(){
        // await this.destinationCountryDropdown.waitForExist({ timeout: 5000 });

        // return (await this.destinationCountryDropdown).isDisplayed();
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
    



}

export default new DashboardPage();
