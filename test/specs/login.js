import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import retryTest from '../specs/retry.js'
describe('User logout', () => {

    it('User should be able to logout ', async () => {

        await retryTest(async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
        await LoginPage.clickMoreBtn();
        await LoginPage.clickLogoutBtn();
        await LoginPage.clickOkBtn();
    })
   });





