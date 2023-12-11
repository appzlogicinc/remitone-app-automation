import { $ } from '@wdio/globals'
import Page from './page.js';
import {beneficiaryDetails} from '../../testData/BeneficiaryData.js';

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
        const selector= 'new UiSelector().descriptionContains("CHEQUEBOOK")';
        return $(`android=${selector}`);
    } 

    get saveBbutton (){
        const selector = 'new UiSelector().description("Save")'
        return $(`android=${selector}`)
    }

    get beneficiaryScreen(){
        const selector = 'new UiSelector().text("Search Beneficiary…")'
        return $(`android=${selector}`)
    }

    get addBeneficiaryScreen(){
        const selector = 'new UiSelector().description("Create Beneficiary")'
        return $(`android=${selector}`)
    }

    // get beneficiaryName(){
    //     const selector = 'new UiSelector().className("android.view.View")[9]'
    //     return $(`android=${selector}`)
    // }
    get beneficiaryName(){
        const selector = 'new UiSelector().descriptionContains("CSMITH")'
        return $(`android=${selector}`)
    }

    get beneficiaryDetailsScreen(){
        const selector = 'new UiSelector().descriptionContains("Beneficiary Details")'
        return $(`android=${selector}`)
    }

    get SendMoneyBtn(){
        const selector = 'new UiSelector().descriptionContains("Send Money")'
        return $(`android=${selector}`) 
    }

    get TransactionTypeScreen(){
        const selector = 'new UiSelector().descriptionContains("Select Transaction Type")'
        return $(`android=${selector}`) 
    }

    get transactionOption(){
        const selector = 'new UiSelector().descriptionContains("Cash Collection")'
        return $(`android=${selector}`) 
    }

    get cashCollectionDetailsScreen(){
        const selector = 'new UiSelector().descriptionContains("Cash Collection Details")'
        return $(`android=${selector}`) 
    }

    get collectionPointState(){
        const selector = 'new UiSelector().descriptionContains("Collection Point State")'
        return $(`android=${selector}`) 
    }

    get selectState(){
        const selector = 'new UiSelector().descriptionContains("Sydney State")'
        return $(`android=${selector}`) 
    }

    get collectionPointCity(){
        const selector = 'new UiSelector().descriptionContains("Collection Point City")'
        return $(`android=${selector}`) 
    }

    get selectCity(){
        const selector = 'new UiSelector().descriptionContains("Sydney City")'
        return $(`android=${selector}`) 

    }
   get collectionPoint(){
    const selector = 'new UiSelector().description("Collection Point")'
        return $(`android=${selector}`) 
   }

   get collectionPointOption(){
    const selector = 'new UiSelector().descriptionContains("Aussie & New Zealand CC")'
        return $(`android=${selector}`) 
   }
   get clickSourceIncome(){
    const selector = 'new UiSelector().descriptionContains("Source of Income *")'
        return $(`android=${selector}`) 

   }
   get selectIncomeOption(){
    const selector = 'new UiSelector().descriptionContains("Business")'
    return $(`android=${selector}`) 
   }

   get clickPurposeRemittance(){
    const selector = 'new UiSelector().descriptionContains("Purpose of Remittance *")'
    return $(`android=${selector}`) 
   } 

   get selectRemittanceOption(){
    const selector = 'new UiSelector().descriptionContains("Family Support")'
    return $(`android=${selector}`) 
   } 

   get nextOption(){
    const selector = 'new UiSelector().description("Next")'
    return $(`android=${selector}`) 
   }

   get editBtn(){
   const selector = 'new UiSelector().("Next")'
    return $(`android=${selector}`) 
   }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickBeneficiaryBtn(){
        await this.beneficiaryBtn.click()
    }

    async verifyBeneficiaryScreenDisply(){
      return await this.beneficiaryScreen.isDisplayed();       
 
    }
    
    async clickAddbeneficiaryBtn(){
        await this.addBeneficiaryBtn.click()
    }

    async verifyAddBeneficiaryScreenDisply(){
       return await this.addBeneficiaryScreen.isDisplayed();       
    }

     async enterBeneficiaryDetails(){
        const { Firstname,Lastname,mobileNo,address,city,state,postcode } = beneficiaryDetails;
        await this.inputFirstname.click();
        await this.inputFirstname.setValue(Firstname);
        BeneficiaryPage.firstName= this.inputFirstname.getText();
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
        return BeneficiaryPage.firstName;
    }

   async clickSaveBtn(){
    await this.saveBbutton.click();
   }

    async verifyBeneficiaryAdded(){ 
      return await this.beneficiaryName.isDisplayed();

    //     const status = false;
    //     const addedBeneficiary=BeneficiaryPage.firstName.getText;
    //     const expectedValue=addedBeneficiary.toUpperCase();
    //    const getbeneficiaryName= (await this.beneficiaryName).getAttribute("content-desc");
    //    if(addedBeneficiary===getbeneficiaryName){
    //     status=true;
    //    }
    //    return status;
    //     expect ((await ( (await this.beneficiaryName).getAttribute("content-desc").)) 
    }

    async clickOnBeneficiary(){
        await this.beneficiaryName.click();
    }

    async verifyBeneficiaryDetailsScreenDisply(){
        return await this.beneficiaryDetailsScreen.isDisplayed();
    }
    
    async clickSendMoneyBtn(){
        await this.SendMoneyBtn.click();
    }

    async verifyTransactionTypeScreenDisply(){
        return await this.TransactionTypeScreen.isDisplayed();
    }

    async selectCashCollectionTrasactionType(){
        await this.transactionOption.click();
    }

    async verifyCashCollectionScreenDisply(){
        return await this.cashCollectionDetailsScreen.isDisplayed();
    }

    async fillCashcollectionForm(){
        await this.collectionPointState.click();
        await this.selectState.click();
        await this.collectionPointCity.click();
        await this.selectCity.click();
        await this.collectionPoint.click();
        await this.collectionPointOption.click();
        await this.clickSourceIncome.click();
        await this.selectIncomeOption.click();
        await this.clickPurposeRemittance.click();
        await this.selectRemittanceOption.click();
        await this.nextOption.click();
    }

    async clickOnEditButton(){
        await this.editBtn.click();
    }
}


export default new BeneficiaryPage();
