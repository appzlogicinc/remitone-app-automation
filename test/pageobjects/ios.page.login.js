import { $ } from '@wdio/globals'
import Page from './page.js';

class IosLoginPage {
  /**
   * define selectors using getter methods
   */
  get ignoreBtn() {
      //return $('IGNORE'); // Update this selector for iOS

    //return $('~IGNORE');
    const selector = 'XCUIElementTypeButton[Name="IGNORE"]';
    
    return $(selector);
  }

  get loginBtn() {
      const selector = 'XCUIElementTypeButton[name="Existing User? Login"]';
      return $(selector);
  }

  get inputUsername() {
      const selector = 'XCUIElementTypeTextField[placeholder="Email Address *"]';
      return $(selector);
  }

  get inputPassword() {
      const selector = 'XCUIElementTypeTextField[placeholder="Password *"]';
      return $(selector);
  }

  get btnSubmit() {
      const selector = 'XCUIElementTypeButton[name="Login"]';
      return $(selector);
  }

  get moreBtn() {
      const selector = 'XCUIElementTypeButton[name="More"]';
      return $(selector);
  }

  get logoutBtn() {
      const selector = 'XCUIElementTypeButton[name="Log Out"]';
      return $(selector);
  }

  get okBtn() {
      const selector = 'XCUIElementTypeButton[name="OK"]';
      return $(selector);
  }

  /**
   * a method to encapsulate automation code to interact with the page
   * e.g. to login using username and password
   */

  async clickDismissPopup() {
      // Update selector for iOS
      const selector = 'XCUIElementTypeButton[name="IGNORE"]';
      const button = await $(selector);
      await button.click();
  }

  async clickLoginBtn() {

    await this.ignoreBtn.click();
    await this.loginBtn.click();
  }

  async login(username, password) {
      await this.inputUsername.click();
      await this.inputUsername.setValue(username);
      await this.inputPassword.click();
      await this.inputPassword.setValue(password);
      await this.btnSubmit.click();
  }

  async isDashboardDisplayed() {
      // Update selector for iOS
      const element = $('XCUIElementTypeOther[name="Wallet"]');
      return element.isExisting();
  }

  async clickMoreBtn() {
      await this.moreBtn.click();
  }

  async clickLogoutBtn() {
      await this.logoutBtn.click();
  }

  async clickOkBtn() {
      await this.okBtn.click();
  }
}

export default new IosLoginPage();

