import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Remit One User Login', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open()

        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123')
    })
})

