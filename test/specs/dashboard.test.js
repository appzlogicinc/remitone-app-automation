import { expect } from '@wdio/globals';
import Dashboard from '../pageobjects/dashboard.js'

describe('Currency Converter Dashboard', () => {
    it('should select destination country from the dropdown', async () => {
        await Dashboard.selectDestinationCountry('Your Destination Country');
        await Dashboard.selectDestinationCountry('India');

        // const selectedCountry = await Dashboard.getSelectedDestinationCountry();
        // expect(selectedCountry).to.equal('Your Destination Country');
    });

    it('should select source currency from the dropdown', async () => {
        await Dashboard.selectSourceCurrency('Your Source Currency');

        const selectedSourceCurrency = await CurrencyConverterPage.getSelectedSourceCurrency();
        expect(selectedSourceCurrency).to.equal('Your Source Currency');
    });

    it('should select target currency from the dropdown', async () => {
        await Dashboard.selectTargetCurrency('Your Target Currency');

        const selectedTargetCurrency = await Dashboard.getSelectedTargetCurrency();
        expect(selectedTargetCurrency).to.equal('Your Target Currency');
    });

    it('should click on the submit button', async () => {
        await Dashboard.clickSubmitButton();

        // Add assertions or verifications as needed
        const successMessage = await Dashboard.getSuccessMessage();
        expect(successMessage).to.equal('Conversion Successful');
    });
});
