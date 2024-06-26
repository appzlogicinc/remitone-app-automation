import { $ } from '@wdio/globals'
import Page from './page.js';
import {validCredentials} from '../../testData/loginData.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class iosLoginPage {
    /**
     * define selectors using getter methods
     */

    get cameraAccess(){
      return $('~Don’t Allow')
    }
    get ignoreBtn (){
      return $('~IGNORE');
      //  const selector = `type == 'XCUIElementTypeButton' && name CONTAINS 'IGNORE'`
      //  return $(`-ios predicate string:${selector}`)
    }

    get loginBtn(){
      return $('~Existing User? Login');

        // const selector = `type == 'XCUIElementTypeButton' && name CONTAINS 'Existing User? Login'`
        // return $(`-ios predicate string:${selector}`)
        // const elementName = 'Existing User? Login';
        // return $(`*[name="${elementName}"]`);
    } 

    get inputUsername () {

        const selector = `type == 'XCUIElementTypeTextField' && name CONTAINS 'Email Address *'`
        return $(`-ios predicate string:${selector}`)
      }
  
      get inputPassword () {

        const selector =  `type == 'XCUIElementTypeTextField' && name CONTAINS 'Password *'`
        return $(`-ios predicate string:${selector}`)
      }
      
      get btnSubmit () {
        return $('~Login');
        // const selector = `type == 'XCUIElementTypeButton' && name CONTAINS 'Login'`
        // return $(`-ios predicate string:${selector}`)

      }
  
      get moreBtn () {
        const selector = `type == 'XCUIElementTypeImage' && name CONTAINS 'More'`
        return $(`-ios predicate string:${selector}`)
      }
  
      get logoutBtn () {
        return $('~Log Out');
        // const selector = `type == 'XCUIElementTypeImage' && name CONTAINS 'Log Out'`
        // return $(`-ios predicate string:${selector}`)
      }
  
      get okBtn () {
        return $('~OK');
        // const selector = `type == 'XCUIElementTypeButton' && name CONTAINS 'OK'`
        // return $(`-ios predicate string:${selector}`)
      }
  
    get dashboardElement(){
      return $('~Send Now');
        // const selector = `type == 'XCUIElementTypeButton' && name CONTAINS 'Send Now'`
        // return $(`-ios predicate string:${selector}`)
    }

    get securityScreen(){
     return $('~Login with Security Pin')
    }

    get setSecurityPin(){
      return $$('//*[@type="XCUIElementTypeButton"]')
    }
  
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickLoginBtn(){
      await  (await this.cameraAccess).click();
        await this.ignoreBtn.click();
        await this.loginBtn.click();
    }

    async login () {
        const { username, password } = validCredentials;
        (await this.inputUsername).waitForDisplayed({timeout:40000});
           await this.inputUsername.click()
           await this.inputUsername.setValue(username);
           await this.inputPassword.click();
           await this.inputPassword.setValue(password);
          await this.btnSubmit.click();
      }

      async verifyUserLoggedin() { 
        await (await this.dashboardElement).waitForDisplayed({timeout:30000});
        return (await this.dashboardElement).isDisplayed();   
      }

      async clickMoreBtn(){
        await this.moreBtn.click();
   }

      async clickLogoutBtn(){
        await this.logoutBtn.click();
   }

     async clickOkBtn(){
      await this.okBtn.click();
   }

   async verifyUserLoggedOut(){ 
   await (await this.ignoreBtn).waitForDisplayed();
      await(await this.ignoreBtn).click();
   return  (await this.loginBtn).isDisplayed();
    }
    
}

export default new iosLoginPage();

