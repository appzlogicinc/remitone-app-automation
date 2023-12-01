import { expect } from '@wdio/globals'
import IosLoginPage from '../pageobjects/ios.page.login.js'

describe('User Login', () => {
    it('User should login with valid credentials', async () => {
        await IosLoginPage.clickLoginBtn();
        await IosLoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');

    })
})

describe('User logout', () => {

    it('User should be able to logout ', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
        await LoginPage.clickLogoutBtn();
        await LoginPage.clickOkBtn();
    })
})




