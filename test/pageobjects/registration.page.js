import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage {

    /**
     * define selectors using getter methods
     */    
    get denybtn(){
        const selector = 'new UiSelector().textContains("Deny")';
        return $(`android=${selector}`);
      }
    
    get dismiss(){
        const selector = 'new UiSelector().description("IGNORE")';
        return $(`android=${selector}`);
      }

    get signUp(){
        return $('~Sign Up');
    }

    getCountrySelector(countryName) {
        const xpath = `//android.widget.ImageView[@content-desc="${countryName}"]`;
        return $(xpath);
    }

    get nextBtn(){
        return $('~Next')
    }

    get securityScreen(){
        const selector = 'new UiSelector().descriptionContains("Set Security Pin")';
        return $(`android=${selector}`);
       //   return $('//android.view.View[@content-desc="Set Security Pin"]');
       // return $('~Set Security Pin')
    }

    get setSecurityPin(){
        return $$('//*[@class="android.widget.Button"]')
    }

    get registrationOptionScreen(){
        return $('~Please select an option to use for registration')
    }

    get inputTextfield(){
        return $$('//*[@class="android.widget.EditText"]')
    }

    get firstNameField(){
        return $('//android.view.View[@content-desc="Personal Details"]/following-sibling::android.widget.EditText[1]')
    }

    get lastnameField(){
        return $('//android.view.View[@content-desc="Personal Details"]/following-sibling::android.widget.EditText[2]')
    }
    get dateOfBirthOption(){
        return $('//android.view.View[@content-desc="Personal Details"]/following-sibling::android.widget.EditText[2]//following-sibling::android.view.View')
    }

    get selectDOB(){
        return $('~Select')
    }

    get nationalityOption(){
        return $('//*[contains(@content-desc,"Nationality")]')
    }

    get country(){
        return $('//*[@content-desc="AFGHANISTAN"]')
    }

    get addressField(){
        return $('//android.view.View[@content-desc="Contact Details"]//following-sibling::android.widget.EditText[1]')
    }

    get pincodeField(){
        return $('//android.view.View[@content-desc="Contact Details"]//following-sibling::android.widget.EditText[5]')
    }

    get enterPincode(){
        return $('//android.widget.ScrollView/android.widget.EditText[5]')
    }

    get mobileField(){
        return $('//android.view.View[@content-desc="Contact Details"]//following-sibling::android.widget.EditText[6]')
    } 

    get entermobile(){
        return $('//android.widget.ScrollView/android.widget.EditText[6]')
    }

    get checkboxField(){
         return $('//android.widget.CheckBox')
    } 

    get registrationSuccussful(){
        return $('~Successfully Registered')
    }

    get loginNowBtn(){
        return $('~Login Now')
    }

    get dashboardElement(){
        const selector = 'new UiSelector().description("Send Now")';
        return $(`android=${selector}`);
    }


      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickSignUpButton(){
       await this.denybtn.click();
       await this.dismiss.click();
       await this.signUp.click();
      }

      async selectCountry(countryName) {
        (await this.getCountrySelector(countryName)).waitForDisplayed({timeout:30000});
        const countrySelector = this.getCountrySelector(countryName);
        await $(countrySelector).click();
    }

    async clickNextButton(){
        (await this.nextBtn).click();
    }

    async selectCountry(countryName) {
        const countrySelector = this.getCountrySelector(countryName);
        await countrySelector.click();
    }

    async verifySecurityScreenDisplayed(){
        await (await this.securityScreen).waitForDisplayed({timeout:30000});
        return (await this.securityScreen).isDisplayed();
    }

    async enterSecurityPin(){
        (await this.setSecurityPin[1]).click(); 
        (await this.setSecurityPin[2]).click(); 
        (await this.setSecurityPin[3]).click(); 
        (await this.setSecurityPin[4]).click(); 
    }
    
    async verifyRegistrationOptionsScreenDisplayed(){
        return (await this.registrationOptionScreen).isDisplayed();
    }

    async verifySignUpScreenDisplayed(){
        return await this.signUp.isDisplayed();
    }

    async enterEmail(){
        const randomString = Math.random().toString(36).substring(7); 
        const randomEmail= randomString + '@yopmail.com';
      await this.inputTextfield[0].click();
      await this.inputTextfield[0].setValue(randomEmail); 
    }

    async enterPassword(){
        await this.inputTextfield[1].click();
        await this.inputTextfield[1].setValue("Appzlogic@123");
    }
    
    async enterConfirmPassword(){
      await this.inputTextfield[2].click();
      await this.inputTextfield[2].setValue("Appzlogic@123");
      browser.hideKeyboard();
    }

    async enterFirstName(){
        const firstNames = ["John", "Jane", "Alex", "Emily", "Chris"];
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        await this.firstNameField.click();
        await this.firstNameField.setValue(randomFirstName);
    }

    async enterLastName(){
        const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        browser.hideKeyboard();
        await this.lastnameField.click();
        await this.lastnameField.setValue(randomLastName);  
    }

    async selectDateOfBirth(){
        await this.dateOfBirthOption.click();
        await this.selectDOB.click();
       
    }

    async selectNationality(){
        browser.hideKeyboard();
        await (await this.nationalityOption).click();
        await this.country.click();  
    }

    async enterAddress(){
        await this.addressField.click();
        await (await this.addressField).setValue("Bloack A, Street 6");
        browser.hideKeyboard();
    }

    async enterPincodeinField(){
        await this.pincodeField.click();
        await (await this.enterPincode).setValue("1234546");
        browser.hideKeyboard();
    }

    async enterMobileNumber(){
        await this.mobileField.click();
        await (await this.entermobile).setValue("9876543210");
    }

    async selectCheckbox(){
        browser.hideKeyboard();
        await (await this.checkboxField).click();
    }

    async clickOnSignUpButton(){
       await (await this.signUp).click();
    }

    async  verifyRegistrationSuccessfulPopupDisplayed(){
        await (await this.registrationSuccussful).waitForDisplayed({timeout:30000});
        return (await this.registrationSuccussful).isDisplayed();
    }

    async clickOnloginNowButton(){
        await (await this.loginNowBtn).click();
    }

    async  verifyUserIsLoggedIn(){
        await this.dashboardElement.waitForDisplayed();
        return (await this.dashboardElement).isDisplayed();
    }

}
    
    export default new RegistrationPage();