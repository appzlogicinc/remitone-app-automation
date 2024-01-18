import { $ } from "@wdio/globals";
const locator = require("../helper/locator");
const beneficaryLocator = require("../constant/beneficiary.locator");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BeneficiaryPage {
  async clickBeneficiaryBtn() {
    (await locator.findLocator(page, beneficaryLocator.beneficiaryBtn)).click();
  }

  async clickAddbeneficiaryBtn() {
    await this.addBeneficiaryBtn.click();
  }

  async enterBeneficiaryDetails(
    Firstname,
    Lastname,
    mobileNo,
    address,
    city,
    state,
    postcode
  ) {
    await locator.findLocator(page, beneficaryLocator.inputFirstname).click();
    await locator.fillLocator(page, beneficaryLocator.Firstname);
    browser.hideKeyboard();
    const scrollableContainer = $(
      "android=new UiScrollable(new UiSelector().scrollable(true))"
    );
    scrollableContainer.scroll("down");
    await this.inputLastname.click();
    await this.inputLastname.setValue(Lastname);
    browser.hideKeyboard();
    scrollableContainer.scroll("down");
    await this.inputMobileno.click();
    await this.inputMobileno.setValue(mobileNo);
    browser.hideKeyboard();
    await this.enterAddress.click();
    await this.enterAddress.setValue(address);
    browser.hideKeyboard();
    await this.enterCity.click();
    await this.enterCity.setValue(city);
    browser.hideKeyboard();
    scrollableContainer.scroll("down");
    await this.enterState.click();
    await this.enterState.setValue(state);
    browser.hideKeyboard();
    scrollableContainer.scroll("down");
    await this.enterPostcode.click();
    await this.enterPostcode.setValue(postcode);
    browser.hideKeyboard();
    await this.idType.click();
    await this.passport.click();
  }

  async clickSaveBtn() {
    await this.saveBbutton.click();
  }
}

export default new BeneficiaryPage();
