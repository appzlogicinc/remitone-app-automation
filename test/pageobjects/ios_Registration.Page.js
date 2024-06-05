import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class iosRegistrationPage {

    /**
     * define selectors using getter methods
     */    
    get cameraAccess(){
        return $('~Don’t Allow')
      }
  
      get ignoreBtn (){
        return $('~IGNORE');
      }

    get signUp(){
        return $('~Sign Up');
    }

    getCountrySelector(countryName) {
        const xpath = `//XCUIElementTypeImage[@name="${countryName}"]`;
        return $(xpath);
    }

    get nextBtn(){
        return $('~Next')
    }

    get securityScreen(){
        // const selector = 'new UiSelector().descriptionContains("Set Security Pin")';
        // return $(`android=${selector}`);
       //   return $('//android.view.View[@content-desc="Set Security Pin"]');
        return $('~Set Security Pin')
    }

    get setSecurityPin(){
        return $$('//*[@type="XCUIElementTypeButton"]')
    }

    get registrationOptionScreen(){
        return $('~Please select an option to use for registration')
    }

    get signUpScreen(){
        return $('//XCUIElementTypeStaticText[@name="Sign Up"]')
    }

    get username(){
        return $('//XCUIElementTypeTextField[contains(@name,"Username *")]')
    }

    get password(){
        return $('//XCUIElementTypeTextField[contains(@name,"Password *")]')
    }

    get confirmPassword(){
        return $('//XCUIElementTypeTextField[contains(@name,"Confirm Password *")]')
    }

    get firstName(){
        return $('//XCUIElementTypeTextField[contains(@name,"First Name *")]')
    }

    get lastName(){
        return $('//XCUIElementTypeTextField[contains(@name,"Last Name *")]')
    }

    get dateOfBirthOption(){
        return $('~Date Of Birth *')
    }

    get selectDOB(){
        return $('~Select')
    }

    get nationalityOption(){
        return $('~Nationality *')
    }

    get country(){
        return $('~AFGHANISTAN')
    }

    get addressField(){
        return $('//XCUIElementTypeTextField[contains(@name,"Address 1 *")]')
    }

    get pincodeField(){
        return $('//XCUIElementTypeTextField[contains(@name,"Postcode / Zipcode *")]')
    }

    get mobileField(){
        return $('//XCUIElementTypeTextField[contains(@name,"Mobile Number *")]')
    } 

    get checkboxField(){
         return $('//*[@type="XCUIElementTypeSwitch"]')
    } 

    get signUpConfirm(){
        return $('//XCUIElementTypeButton[@name="Sign Up"]')
    }

    get registrationSuccussful(){
        return $('~Successfully Registered')
    }

    get loginNowBtn(){
        return $('~Login Now')
    }

    get dashboardElement(){
        return $(`~Send Now`);
    }


      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickSignUpButton(){
        (await this.cameraAccess).click();
      if ((await this.ignoreBtn).isDisplayed()){
        await this.ignoreBtn.click();
      }
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
        await(await this.setSecurityPin[1]).click(); 
        await(await this.setSecurityPin[2]).click(); 
        await(await this.setSecurityPin[3]).click(); 
        await(await this.setSecurityPin[4]).click(); 
    }
    
    async verifyRegistrationOptionsScreenDisplayed(){
        return await(await this.registrationOptionScreen).isDisplayed();
    }

    async verifySignUpScreenDisplayed(){
        return await(await this.signUpScreen).isDisplayed();
    }

    async enterEmail(){
        const randomString = Math.random().toString(36).substring(7); 
        const randomEmail= randomString + '@yopmail.com';
      await this.username.click();
      await this.username.setValue(randomEmail); 
    }

    async enterPassword(){
        await this.password.click();
        await this.password.setValue("Appzlogic@123");
    }
    
    async enterConfirmPassword(){
      await this.confirmPassword.click();
      await this.confirmPassword.setValue("Appzlogic@123");
      browser.hideKeyboard();
    }

    async enterFirstName() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let randomFirstName = '';
        for (let i = 0; i < 5; i++) { 
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomFirstName += characters[randomIndex];
        }
        await this.firstName.click(); 
        await this.firstName.setValue(randomFirstName); 
    }

    async enterLastName(){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let randomLastName = '';
        for (let i = 0; i < 5; i++) { 
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomLastName += characters[randomIndex];
        }
        await this.lastName.click();
        await this.lastName.setValue(randomLastName);  
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
        await (await this.addressField).setValue("Block A, Street 6");
        browser.hideKeyboard();
    }

    async enterPincodeinField(){
        await this.pincodeField.click();
        await (await this.pincodeField).setValue("1234546");
        browser.hideKeyboard();
    }

    async enterMobileNumber(){
        await this.mobileField.click();
        await (await this.mobileField).setValue("9876543210");
    }

    async selectCheckbox(){
        browser.hideKeyboard();
        await (await this.checkboxField).click();
    }

    async clickOnSignUpButton(){
       await (await this.signUpConfirm).click();
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
    
    export default new iosRegistrationPage();