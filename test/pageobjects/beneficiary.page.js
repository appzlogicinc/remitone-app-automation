import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BeneficiaryPage {
    /**
     * define selectors using getter methods
     */
    get beneficiaryBtn (){
        const selector = 'new UiSelector().descriptionContains("Beneficiary")'
        return $(`android=${selector}`)
    }

    get addBeneficiaryBtn (){
        const selector = 'new UiSelector().description("Add Beneficiary")'
        return $(`android=${selector}`)
    }

    get inputFirstname (){
        const selector = 'new UiSelector().textContains("First Name")';
        return $(`android=${selector}`)
    }

    get inputLastname (){
        const selector = 'new UiSelector().description("Last Name")'
        return $(`android=${selector}`)
    }

    get inputMobileno (){
        const selector = 'new UiSelector().textContains("Mobile Number")';
        return $(`android=${selector}`)
    }

    get enterAddress (){
        const selector = 'new UiSelector().textContains("Address 1")';
        return $(`android=${selector}`)
    }

    get enterCity (){
        const selector = 'new UiSelector().textContains("City")';
        return $(`android=${selector}`)
    }

    get enterState (){
        const selector= 'new UiSelector().textContains("State")';
        return $(`android=${selector}`)
    }

    get enterPostcode (){
        const selector = 'new UiSelector().textContains("Postcode / Zipcode")';
        return $(`android=${selector}`)
    }

    get idType (){
        const selector = 'new UiSelector().descriptionContains("Identification Type")';
        return $(`android=${selector}`)
    }

    get paasport (){
        const selector8= 'new UiSelector().descriptionContains("PASSPORT")';
        return $(`android=${selector}`)
    }

    get idType (){
        const selector = 'new UiSelector().descriptionContains("Identification Type")';
        return $(`android=${selector}`)
    }

    get saveBbutton (){
        const selector = 'new UiSelector().description("Save")'
        return $(`android=${selector}`)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickBeneficiaryBtn(){
        await beneficiaryBtn.click()
    }
    
    async clickAddbeneficiaryBtn(){
        await addBeneficiaryBtn.click()
    }

     async enterDetails(Firstname,Lastname,mobileNo,address,city,state,postcode){

        await inputFirstname.click();
        await inputFirstname.setValue(Firstname);
        browser.hideKeyboard();
        const scrollableContainer = $('android=new UiScrollable(new UiSelector().scrollable(true))');
        scrollableContainer.scroll('down');
        await inputLastname.click();
        await inputLastname.setValue(Lastname);
        browser.hideKeyboard();
        scrollableContainer.scroll('down');
        await inputMobileno.click();
        await inputMobileno.setValue(mobileNo);
        browser.hideKeyboard();
        await enterAddress.click();
        await enterAddress.setValue(address);
        browser.hideKeyboard();
        await enterCity.click();
        await enterCity.setValue(city);
        browser.hideKeyboard();
        await enterState.click();
        await enterState.setValue(state);
        browser.hideKeyboard();
        await enterPostcode.click();
        await enterPostcode.setValue(postcode);
        browser.hideKeyboard();
        await idType.click();
        await  paasport.click();

    }

   async  clickSaveBtn(){
    await saveBbutton.click();
    }

}

export default new BeneficiaryPage();
