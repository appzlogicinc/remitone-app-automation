import { $ } from '@wdio/globals'
import Page from './page.js';

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
      const selector = 'new UiSelector().textContains("Email Address")';
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

    async login ( username,  password) {
        await this.inputUsername.click()
        await this.inputUsername.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

     async isDahboardDisplayed() {
        const element = $('android=new UiSelector().description("Wallet")')
        return element.isExisting();
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


}

export default new LoginPage();
