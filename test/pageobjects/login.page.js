import { $ } from '@wdio/globals'
import Page from './page.js';
import {validCredentials} from '../../testData/loginData.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    /**
     * define selectors using getter methods
     */
    get ignoreBtn (){
        return $('IGNORE');
    }

    get loginBtn(){
      const selector = 'new UiSelector().description("Existing User? Login")';
        return $(`android=${selector}`);
    }

    get inputUsername () {
      const selector = 'new UiSelector().textContains("Email Address ")';
      return $(`android=${selector}`);
    }

    get inputPassword () {
      const selector = 'new UiSelector().textContains("Password ")';
      return $(`android=${selector}`);
    }

    get btnSubmit () {
      const selector = 'new UiSelector().description("Login")';
      return $(`android=${selector}`);
    }

    get moreBtn () {
      const selector = 'new UiSelector().descriptionContains("More")';
      return $(`android=${selector}`);
    }

    get logoutBtn () {
      const selector = 'new UiSelector().description("Log Out")';
      return $(`android=${selector}`);
    }

    get okBtn () {
      const selector = 'new UiSelector().description("OK")';
      return $(`android=${selector}`);
    }

  get dashboardElement(){
           // return $('~Afghanistan')

    const selector = 'new UiSelector().description("Send Now")';
    return $(`android=${selector}`);
  }
  
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickDismissPopup (){
        const selector = 'new UiSelector().text("IGNORE").className("android.widget.Button")'
        const button = await $(`android=${selector}`)
        await button.click(); 
      }

    async clickLoginBtn(){
        await this.loginBtn.click();
    }

    async login () {
      async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      console.log('Start');
      // Sleep for 2 seconds (2000 milliseconds)
      await sleep(9000);
      console.log('End');
      const { username, password } = validCredentials;
         await this.inputUsername.click()
         await this.inputUsername.setValue(username);
         await this.inputPassword.click();
         await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

     async verifyUserLoggedin() { 
      async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      console.log('Start');
      // Sleep for 2 seconds (2000 milliseconds)
      await sleep(9000);
      console.log('End');
      return (await this.dashboardElement).isDisplayed();   
    }
     
    async clickMoreBtn(){
        await this.moreBtn.click()
   }

      async clickLogoutBtn(){
        await this.logoutBtn.click()
   }

     async clickOkBtn(){
      await this.okBtn.click()
   }

   async verifyUserLoggedOut(){
    return  (await this.loginBtn).isDisplayed();
  }
}

export default new LoginPage();
