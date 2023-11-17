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
        const selector = 'new UiSelector().textContains("Last Name *")'
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

    get passport (){
        const selector8= 'new UiSelector().descriptionContains("PASSPORT")';
        return $(`android=${selector}`);
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
        await this.beneficiaryBtn.click()
    }
    
    async clickAddbeneficiaryBtn(){
        await this.addBeneficiaryBtn.click()
    }

     async enterDetails(Firstname,Lastname,mobileNo,address,city,state,postcode){

        await this.inputFirstname.click();
        await this.inputFirstname.setValue(Firstname);
        browser.hideKeyboard();
        const scrollableContainer = $('android=new UiScrollable(new UiSelector().scrollable(true))');
        scrollableContainer.scroll('down');
        await this.inputLastname.click();
        await this.inputLastname.setValue(Lastname);
        browser.hideKeyboard();
        scrollableContainer.scroll('down');
        await this.inputMobileno.click();
        await this.inputMobileno.setValue(mobileNo);
        browser.hideKeyboard();
        await this.enterAddress.click();
        await this.enterAddress.setValue(address);
        browser.hideKeyboard();
        await this.enterCity.click();
        await this.enterCity.setValue(city);
        browser.hideKeyboard();
        scrollableContainer.scroll('down');
        await this.enterState.click();
        await this.enterState.setValue(state);
        browser.hideKeyboard();
        scrollableContainer.scroll('down');
        await this.enterPostcode.click();
        await this.enterPostcode.setValue(postcode);
        browser.hideKeyboard();
        await this.idType.click();
        await this.passport.click();

    }

   async  clickSaveBtn(){
    await this.saveBbutton.click();
    }

}

export default new BeneficiaryPage();
