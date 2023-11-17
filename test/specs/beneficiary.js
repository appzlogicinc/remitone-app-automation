import { expect } from '@wdio/globals'
import BeneficiaryPage from '../pageobjects/beneficiary.page.js'
import LoginPage from '../pageobjects/login.page.js'

//import SecurePage from '../pageobjects/secure.page.js'

describe('Verify Benificiary page', () => {
    it('add beneficiary', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
        await BeneficiaryPage.clickBeneficiaryBtn();
        await BeneficiaryPage.clickAddbeneficiaryBtn();
        await BeneficiaryPage.enterDetails("rock","smith","1234567890","test","test","test","123456");
        await BeneficiaryPage.clickSaveBtn();
    })

    
})


