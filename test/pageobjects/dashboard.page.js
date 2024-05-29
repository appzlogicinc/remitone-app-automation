import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class dashboardPage {
          
    /**
     * define selectors using getter methods
     */
    get countryOnDashboard (){
        const selector = 'new UiSelector().description("Bangladesh")'
        return $(`android=${selector}`)
    }

    get dashboardElement(){
        const selector = 'new UiSelector().description("Send Now")';
        return $(`android=${selector}`);
    }

    get exchangeRate(){
        const selector = 'new UiSelector().descriptionContains("GBP").descriptionContains("BDT")';
        return $(`android=${selector}`);
    }

    get beneficiaryName(){
        const selector = 'new UiSelector().descriptionContains("REMITONE")'
        return $(`android=${selector}`)
    }

    get transferFee(){
      return $('//android.view.View[@content-desc="5.330 GBP"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickCountryDropdown(){
    (await this.countryDropdown).waitForClickable();
       await this.countryDropdown.click();
    }

    async selectCountry(){
     await this.country.click();
    }

    async verifyCountryDisplayOnDahboard(){
        await this.countryOnDashboard.waitForDisplayed();
    return  (await this.countryOnDashboard).isDisplayed();
    }

    async ClickSendNowBtn(){
        await this.dashboardElement.click();
    }

    async clickOnBeneficiary(){
        await this.beneficiaryName.click();
    }

    async verifyExchangeRateDisplay(){
        (await this.exchangeRate).waitForDisplayed();
        return this.exchangeRate.isDisplayed();
    }

    async verifyTransferFee(){
        (await this.transferFee).waitForDisplayed();
        return this.transferFee.isDisplayed();
    }
}


export default new dashboardPage();

