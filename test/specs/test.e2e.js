import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
//import SecurePage from '../pageobjects/secure.page.js'

describe('Remit One User Login and logout', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
       // const isUserLoggedIn = LoginPage.isDahboardDisplayed();
       // expect(isUserLoggedIn).to.be.true;
    })

    it('should able logout', async () => {
        await LoginPage.clickMoreBtn();
        await LoginPage.clickLogoutBtn();
        await LoginPage.clickOkBtn();
    })
})


