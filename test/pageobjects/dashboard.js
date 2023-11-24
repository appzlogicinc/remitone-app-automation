import { $ } from '@wdio/globals';
import Page from './page.js';

class Dashboard {
    get destinationCountryDropdown() {
        const selector = 'new UiSelector().description("Afghanistan")';
        return $(`android=${selector}`);
    }
    // get countryBtn(){
    //     const selector = 'new UiSelector().description("Afghanistan")';
    //     return $(`android=${selector}`);
    //   }

    get sourceCurrencyDropdown() {
        const selector = 'new UiSelector().description("GBP")';
        return $(`android=${selector}`);
    }

    get destinationCurrencyDropdown() {
        const selector = 'new UiSelector().description("AFN")';
        return $(`android=${selector}`);
    }

    get submitButton() {
        const selector = 'new UiSelector().description("Send Now")';
        return $(`android=${selector}`);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async getSelectedDestinationCountry() {
    }

    async getSelectedSourceCurrency() {
    }

    async getSelectedTargetCurrency() {
    }

   
}

export default new Dashboard();
