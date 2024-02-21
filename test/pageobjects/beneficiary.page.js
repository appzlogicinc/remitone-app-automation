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

    get saveEditButton (){
        return $('~EditBeneficiaryRouteSave');
    }
    
    get beneficiaryScreen(){
        const selector = 'new UiSelector().textContains("Search Beneficiary")'
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
        const selector = 'new UiSelector().descriptionContains("Card Transfer")'
        return $(`android=${selector}`) 
    }

    get cardTransferDetailsScreen(){
        const selector = 'new UiSelector().descriptionContains("Card Transfer Details")'
        return $(`android=${selector}`) 
    }

    get cardNumber(){
        const selector = 'new UiSelector().textContains("Card Number")'
        return $(`android=${selector}`) 
    }

   get clickSourceIncome(){
    const selector = 'new UiSelector().descriptionContains("Source of Income")'
        return $(`android=${selector}`) 
   }

   get selectIncomeOption(){
    const selector = 'new UiSelector().descriptionContains("Business")'
    return $(`android=${selector}`) 
   }

   get clickPurposeRemittance(){
    const selector = 'new UiSelector().descriptionContains("Purpose of Remittance")'
    return $(`android=${selector}`) 
   } 

   get selectRemittanceOption(){
    const selector = 'new UiSelector().descriptionContains("Family Support")'
    return $(`android=${selector}`) 
   } 

   get nextOption(){
    const selector = 'new UiSelector().descriptionContains("Next")'
    return $(`android=${selector}`) 
   }

   get editBtn(){
   const selector = 'new UiSelector().description("Edit beneficiary")'
    return $(`android=${selector}`) 
   }

   get beneficiaryUpdatedMsg(){
    const selector = 'new UiSelector().descriptionContains("Beneficiary Successfully Updated !")'
    return $(`android=${selector}`) 
   }

   get paymentMethodScreen(){   
    const selector = 'new UiSelector().descriptionContains("Select Payment Method")'
    return $(`android=${selector}`) 
   }

   get paymentMethod(){
        const selector = 'new UiSelector().description("Card (WorldPay)")'
        return $(`android=${selector}`) 
       }

       get completeTransactionScreen(){
        const selector = 'new UiSelector().description("Complete Transaction")'
        return $(`android=${selector}`) 
       }

       get AmountField(){
        const selector = 'new UiSelector().textContains("Amount")'
        return $$(`android=${selector}`) 
       }

       get senNowBtn(){
        const selector = 'new UiSelector().description("CreateWalletTransactionRoute, Send Now")'
        return $$(`android=${selector}`) 
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
     // return await this.beneficiaryName.isDisplayed();

    //     const status = false;
        const addedBeneficiary= beneficiaryDetails.Firstname;

        const expectedValue=addedBeneficiary.toUpperCase();
        const getbeneficiaryName= (await this.beneficiaryName).getAttribute("content-desc");
       if(expectedValue===getbeneficiaryName){
        status=true;
       }
       return status;
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

    async selectCardTransferTransactionType(){
        await this.transactionOption.click();
    }

    async verifyCardTransferScreenDisply(){
        return await this.cardTransferDetailsScreen.isDisplayed();
    }

    async fillCardTransferForm(){
        await this.cardNumber.click();
        await this.cardNumber.setValue("4242424242424242");
        await this.clickSourceIncome.click();
        await this.selectIncomeOption.click();
        await this.clickPurposeRemittance.click();
        await this.selectRemittanceOption.click();
        await this.nextOption.click();
    }

    async clickEditBeneficiaryBtn(){
        await this.editBtn.click();
    }

    async editDetails(){
        const scrollableContainer = $('android=new UiScrollable(new UiSelector().scrollable(true))');
        scrollableContainer.scroll('down');
        await this.inputMobileno.click();
        await this.inputMobileno.setValue("1234567890");
    }

    async clickSaveEditBtn(){
        (await this.saveEditButton).click();
       }
       
    async verifyBeneficiaryUpdatedMsg(){
       (await this.beneficiaryUpdatedMsg).waitForDisplayed();
       return await this.beneficiaryUpdatedMsg.isDisplayed();
    }

    async paymentMethodScreenDisplay(){
        return await this.paymentMethodScreen.isDisplayed();
    }

    async selectPaymentMethod(){
        await this.paymentMethod.click();

    }

    async completeTrasactionScreenDisplay(){
        return await this.completeTransactionScreen.isDisplayed();
    }

    async enterAmountToTransfer(){
        await this.AmountField[0].click();
        await this.AmountField[0].setValue("1.5");
    }

    async clickSendNowBtn(){
        await this.senNowBtn.click();
    }
}


export default new BeneficiaryPage();
