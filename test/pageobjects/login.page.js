import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    // get ignoreBtn (){
    //     return $('IGNORE');
    // }

    // get loginBtn(){
    //     return $('[name="Existing User? Login"]');
    // }

    // get inputUsername () {
    //     return $('#username');
    // }

    // get inputPassword () {
    //     return $('#password');
    // }

    // get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickDismissPopup (){
        const selector = 'new UiSelector().text("IGNORE").className("android.widget.Button")'
        const button = await $(`android=${selector}`)
        await button.click()
      // await this.ignoreBtn().click();
    }

    async clickLoginBtn(){
        const selector = 'new UiSelector().description("Existing User? Login")';
        const button = await $(`android=${selector}`);
        await button.click();
       // await this.loginBtn().click();
    }

    async login ( username,  password) {
        const selector1 = 'new UiSelector().textContains("Email Address ")';
        const inputUsername = await $(`android=${selector1}`);

        const selector2 = 'new UiSelector().textContains("Password ")';
        const inputPassword = await $(`android=${selector2}`);

        const selector3 = 'new UiSelector().description("Login")';
        const btnSubmit = await $(`android=${selector3}`);

        await inputUsername.click();
        await inputUsername.setValue(username);
        await inputPassword.click();
        await inputPassword.setValue(password);
        await btnSubmit.click();
    }

     async isDahboardDisplayed() {
        const element = $('android=new UiSelector().description("Wallet")');

        return element.isExisting();
     }

    //  async isDahboardDisplayed(){
    //     //const element = $('android=new UiSelector().description("Wallet")');

    //     const selector = 'new UiSelector().descriptionContains("Wallet")';
    //     const dashboardElement =  $(`android=${selector}`);
    //     return  await dashboardElement.isExisting();
    // }

      async clickMoreBtn(){
        const selector = 'new UiSelector().description("More")';
        const moreBtn = await $(`android=${selector}`);
        moreBtn.click();
   }

      async clickLogoutBtn(){
      const selector = 'new UiSelector().description("Logout")';
      const logoutBtn = await $(`android=${selector}`);
      logoutBtn.click();
   }

     async clickOkBtn(){
     const selector = 'new UiSelector().description("OK")';
     const okBtn = await $(`android=${selector}`);
     okBtn.click();
   }


}

export default new LoginPage();
