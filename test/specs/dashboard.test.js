import { expect } from '@wdio/globals';
import DashboardPage from '../pageobjects/dashboard.js'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';

describe('Dashboard', () => {

    it('verify user is able to send money to end user from home-screen', async () => {
        
        await LoginPage.clickLoginBtn();
        await LoginPage.login('swasti.sharma@appzlogic.com', 'Appzlogic@123');
        chaiExpect(await DashboardPage.verifyDestinationCountryDisplayed()).to.be.true;
        //chaiExpect(await DashboardPage.verifySourceCurrencyDisplayed()).to.be.true;
        await DashboardPage.enterAmountInTextField();
        await DashboardPage.clickSendNowButton();
        chaiExpect(await DashboardPage.verifySelectBeneficiaryScreen()).to.be.true;


    })
});



// describe('Currency Converter Dashboard', () => {
//     it('should select destination country from the dropdown', async () => {
//         await Dashboard.selectDestinationCountry('Your Destination Country');
        
//         await Dashboard.selectDestinationCountry('India');

//         // const selectedCountry = await Dashboard.getSelectedDestinationCountry();
//         // expect(selectedCountry).to.equal('Your Destination Country');
//     });

//     it('should select source currency from the dropdown', async () => {
//         await Dashboard.selectSourceCurrency('Your Source Currency');

//         const selectedSourceCurrency = await CurrencyConverterPage.getSelectedSourceCurrency();
//         expect(selectedSourceCurrency).to.equal('Your Source Currency');
//     });

//     it('should select target currency from the dropdown', async () => {
//         await Dashboard.selectTargetCurrency('Your Target Currency');

//         const selectedTargetCurrency = await Dashboard.getSelectedTargetCurrency();
//         expect(selectedTargetCurrency).to.equal('Your Target Currency');
//     });

//     it('should click on the submit button', async () => {
//         await Dashboard.clickSubmitButton();

//         // Add assertions or verifications as needed
//         const successMessage = await Dashboard.getSuccessMessage();
//         expect(successMessage).to.equal('Conversion Successful');
//     });
// });
