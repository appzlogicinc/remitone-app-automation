const { Page } = require("@playwright/test");

//  the function
const findLocator = (page, selector) => {
  return $(`android=${selector}`);
};

const findLocators = (page, selector) => {
  return page.$$(selector);
};

const fillLocator = async (locator, value) => {
  return await locator.setValue(value);
};

const checkLocatorExist = async (page, selector) => {
  return await page.waitForSelector(selector);
};

module.exports = { findLocator, findLocators, fillLocator, checkLocatorExist };
