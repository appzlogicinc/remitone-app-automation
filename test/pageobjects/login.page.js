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
      return $('~IGNORE');
    }

    get loginBtn(){
      return $('~Existing User? Login');

      // const selector = 'new UiSelector().description("Existing User? Login")';
      //   return $(`android=${selector}`);
    }

    get inputUsername () {
      const selector = 'new UiSelector().className("android.widget.EditText")';
      return $$(`android=${selector}`);
    }

    get inputPassword () {
      const selector = 'new UiSelector().className("android.widget.EditText")';
      return $$(`android=${selector}`);
    }

    get btnSubmit () {
     return $('~Login');
      // const selector = 'new UiSelector().descriptionContains("Login")';
      // return $(`android=${selector}`);
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
      return $('~OK');

      // const selector = 'new UiSelector().description("OK")';
      // return $(`android=${selector}`);
    }

  get dashboardElement(){
    const selector = 'new UiSelector().description("Send Now")';
    return $(`android=${selector}`);
  }

  get denybtn(){
    const selector = 'new UiSelector().textContains("Deny")';
    return $(`android=${selector}`);
  }

  get dismiss(){
    const selector = 'new UiSelector().description("IGNORE")';
    return $(`android=${selector}`);
  }
  
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickLoginBtn(){
    //  (await this.denybtn).waitForClickable();
      await this.denybtn.click();
      await this.dismiss.click();
      await this.loginBtn.click();
    }

    async login () {

      const { username, password } = validCredentials;
      (await this.inputUsername[0]).waitForDisplayed();
         await this.inputUsername[0].click()
         await this.inputUsername[0].setValue(username);
         await this.inputPassword[1].click();
         await this.inputPassword[1].setValue(password);
         (await this.btnSubmit).waitForClickable();
        await this.btnSubmit.click();
    }

     async verifyUserLoggedin() { 
      await (await this.dashboardElement).waitForDisplayed({timeout:30000});
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
    await this.dismiss.waitForDisplayed();
   await (await this.dismiss).click(); 
   return  (await this.loginBtn).isDisplayed();
  }

}

export default new LoginPage();
