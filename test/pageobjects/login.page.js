const locator = require("../helper/locator");
const loginLocator = require("../constant/login.locator");

/**
 * sub page containing specific methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  get ignoreBtn() {
    return $("IGNORE");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async clickDismissPopup() {
    const selector =
      'new UiSelector().text("IGNORE").className("android.widget.Button")';
    const button = await $(`android=${selector}`);
    await button.click();
  }

  async clickLoginBtn() {
    await locator.findLocator(page, loginLocator.loginBtn).click();
  }

  async login(username, password) {
    await locator.findLocator(page, loginLocator.inputUsername).click();
    await locator.fillLocator(page, loginLocator.inputUsername, username);
    await locator.findLocator(page, loginLocator.inputPassword).click();
    await locator.fillLocator(page, loginLocator.inputPassword, password);
    await locator.findLocator(page, loginLocator.btnSubmit).click();
  }

  async isDahboardDisplayed() {
    const element = $('android=new UiSelector().description("Wallets")');
    return element.isExisting();
  }

  async clickMoreBtn() {
    await locator.findLocator(page, loginLocator.moreBtn).click();
  }

  async clickLogoutBtn() {
    await locator.findLocator(page, loginLocator.logoutBtn).click();
  }

  async clickOkBtn() {
    await locator.findLocator(page, loginLocator.okBtn).click();
  }
}

export default new LoginPage();
