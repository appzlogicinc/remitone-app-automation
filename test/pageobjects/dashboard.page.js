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
        return $('(//*[@class="android.widget.EditText"]//android.view.View)[3]')
        // const selector = 'new UiSelector().descriptionContains("REMITONE")'
        // return $(`android=${selector}`)
    }

    get transferFee(){
      return $('//android.view.View[@content-desc="5.330 GBP"]')
    }

    get profileBtn(){
        return $('//android.widget.ImageView[contains(@content-desc,"Profile")]')
    }

    get profileScreen(){
        return $('~Personal Details')
    }

    get editProfileBtn(){
        return $('(//*[@class="android.view.View"]/android.widget.ImageView[2])[1]')
    }

    get editProfileScreen(){
        return $('~Edit Profile')
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

    async clickProfileBtn(){
        await (await this.profileBtn).click();
    }

    async verifyProfileScreen(){
       return await(await this.profileScreen).click();
    }

    async clickEditProfileBtn(){
       await (await this.editProfileBtn).click();
    }

    async verifyEditProfileScreen(){
        return await (await this.editProfileScreen).click();
     }

     async verifyUpdatedProfileMessage(){
        await (await this.updatedProfileMsg).waitForDisplayed({timeout:30000});
        return await (await this.updatedProfileMsg).click();
     }

}


export default new dashboardPage();

