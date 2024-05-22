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
        const selector = 'new UiSelector().description("CreateBeneficiaryRouteSave")'
        return $(`android=${selector}`)
    }

    get addedBeneficiary(){
        const selector = 'new UiSelector().descriptionContains("OLIVE")'
        return $(`android=${selector}`)
    }

    get validationMsg(){
        return  $('This beneficiary already exists.');

        // const selector = 'new UiSelector().description("This beneficiary already exists.")'
        // return $(`android=${selector}`)
    }

    get saveEditButton (){
        return $('~EditBeneficiaryRouteSave');
    }
    
    get beneficiaryScreen(){
        return $('//android.view.View[@content-desc="Select Beneficiary"]');
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
        const selector = 'new UiSelector().descriptionContains("REMITONE")'
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
        const selector = 'new UiSelector().description("Select Transaction Type")'
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
        const selector = 'new UiSelector().className("android.widget.EditText")'
        return $(`android=${selector}`) 
    }

   get clickSourceIncome(){
    const selector = 'new UiSelector().descriptionContains("Source of Income ")'
        return $(`android=${selector}`) 
   }

   get selectIncomeOption(){
    const selector = 'new UiSelector().descriptionContains("Business")'
    return $(`android=${selector}`) 
   }

   get clickPurposeRemittance(){
    const selector = 'new UiSelector().descriptionContains("Purpose of Remittance ")'
    return $(`android=${selector}`) 
   } 

   get selectRemittanceOption(){
    const selector = 'new UiSelector().descriptionContains("Family Support")'
    return $(`android=${selector}`) 
   } 

   get nextOption(){
    return $('~Next')
    // const selector = 'new UiSelector().descriptionContains("Next")'
    // return $(`android=${selector}`) 
   }

   get editBtn(){
   const selector = 'new UiSelector().description("Edit beneficiary")'
    return $(`android=${selector}`) 
   }

   get beneficiaryUpdatedMsg(){
   return  $('//android.view.View[@content-desc="Beneficiary Successfully Updated !"]');
   
   }

   get paymentMethodScreen(){   
    return $('~Select Payment Method');

    // const selector = 'new UiSelector().description("Select Payment Method")'
    // return $(`android=${selector}`) 
   }

   get paymentMethod(){
        const selector = 'new UiSelector().description("Card (WorldPay)")'
        return $(`android=${selector}`) 
       }

       get completeTransactionScreen(){
        const selector = 'new UiSelector().description("Complete Transaction")'
        return $(`android=${selector}`) 
       }

       get receiveCurrencydropdown(){
        const selector = 'new UiSelector().description("EUR")'
        return $(`android=${selector}`) 
       }

       get selectCurrency(){
        const selector = 'new UiSelector().description("USD")'
        return $(`android=${selector}`) 
       }

       get AmountField(){
        const selector = 'new UiSelector().className("android.widget.EditText")'
        return $$(`android=${selector}`) 
       }

       get senNowBtn(){
        const selector = 'new UiSelector().description("Send Now")'
        return $(`android=${selector}`) 
       }

       get confirmTransactionScreen(){
        const selector = 'new UiSelector().description("Confirm Transaction")'
        return $(`android=${selector}`) 
       }

       get similarTrasactionPopUp(){
        const selector = 'new UiSelector().description("Similar Transaction")'
        return $(`android=${selector}`) 
       }

       get cancleBtn(){
       return $('~Cancel');
       }

       get confirmBtn(){
        const selector = 'new UiSelector().description("Confirm")'
        return $(`android=${selector}`) 
       }

       get transactionCreationMsg(){
        const selector = 'new UiSelector().description("Transaction has been created")'
        return $(`android=${selector}`) 
       }

       get trasactionDetailsScreen(){
        const selector = 'new UiSelector().description("Transaction Details")'
        return $(`android=${selector}`) 
       }

       get transactionNo(){
        const selector = 'new UiSelector().descriptionContains("Transaction No: ")'
        return $(`android=${selector}`) 
       }

       get makePaymentBtn(){
          return $('~Make Payment')
       }

       get makePaymentScreen(){
        return $('~Make Payment')
       }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickBeneficiaryBtn(){
        await this.beneficiaryBtn.click()
    }

    async verifyBeneficiaryScreenDisply(){
        await this.addBeneficiaryBtn.waitForDisplayed();
      return (await this.addBeneficiaryBtn).isDisplayed();       
 
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
        // await this.enterState.click();
        // await this.enterState.setValue(state);
        // browser.hideKeyboard();
        // scrollableContainer.scroll('down');
        await this.enterPostcode.click();
        await this.enterPostcode.setValue(postcode);
        browser.hideKeyboard();
        await this.idType.click();
        await this.passport.click();
    }

   async clickSaveBtn(){
    await this.saveBbutton.click();
   }

    async verifyBeneficiaryAdded(){ 
        try{
            (await this.validationMsg).waitForDisplayed();
            return this.validationMsg.isDisplayed();
        }

        catch (exception){
            (await this.beneficiaryScreen).waitForDisplayed();
            return this.addedBeneficiary.isDisplayed();
        }
    }
     // return await this.beneficiaryName.isDisplayed();

    //     const status = false;
    //     const addedBeneficiary= beneficiaryDetails.Firstname;

    //     const expectedValue=addedBeneficiary.toUpperCase();
    //     const getbeneficiaryName= (await this.beneficiaryName).getAttribute("content-desc");
    //    if(expectedValue===getbeneficiaryName){
    //     status=true;
    //    }
    //    return status;
    // //     expect ((await ( (await this.beneficiaryName).getAttribute("content-desc").)) 
    // }

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
         (await this.cardTransferDetailsScreen).waitForDisplayed();
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
        // const scrollableContainer = $('android=new UiScrollable(new UiSelector().scrollable(true))');
        // scrollableContainer.scroll('down');
        // await this.inputMobileno.click();
        // await this.inputMobileno.setValue("1234567890");
        function generateRandomMobileNumber() {
            let randomNumber = '';
            for (let i = 0; i < 10; i++) {
              randomNumber += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
            }
            return randomNumber;
          }
          const randomMobileNumber = generateRandomMobileNumber();
          await this.inputMobileno.click();
          await this.inputMobileno.setValue(randomMobileNumber);
    }

    async clickSaveEditBtn(){
        (await this.saveEditButton).click();
       }
       
    async verifyBeneficiaryUpdatedMsg(){
        try {
            await (await this.beneficiaryUpdatedMsg).waitForDisplayed();
            console.log("beneficiary test"+(await this.beneficiaryUpdatedMsg).getText());
            return await (await this.beneficiaryUpdatedMsg).isDisplayed();
        } catch (error) {
            console.error("Error occurred while verifying text:", error);
    }
}

    async paymentMethodScreenDisplay(){
        try {
            await (await this.paymentMethodScreen).waitForDisplayed();
            return await (await this.paymentMethodScreen).isDisplayed();
        } catch (error) {
            console.error("Error occurred while verifying text:", error);
      }
    }

    async selectPaymentMethod(){
        await this.paymentMethod.click();

    }

    async completeTrasactionScreenDisplay(){
        return await this.completeTransactionScreen.isDisplayed();
    }

    async selectReceiveCurrency(){
        await this.receiveCurrencydropdown.click();
        await this.selectCurrency.click();
    }

    async enterAmountToTransfer(){
        await this.AmountField[0].click();
        await this.AmountField[0].setValue("2");
    }

    async clickSendNowBtn(){
      //  (await this.senNowBtn).waitForClickable();    
        await this.senNowBtn.click();
    }

    async confirmTransactionScreenDisplay(){
        try {
            await (await this.confirmTransactionScreen).waitForDisplayed();
            return await (await this.confirmTransactionScreen).isDisplayed();
        } catch (error) {
            await this.similarTrasactionPopUp.isDisplayed();
            await this.cancleBtn.click();
            return await (await this.confirmTransactionScreen).isDisplayed();
      }
    }

    async clickConfirmBtn(){
        await this.confirmBtn.click();
    }

    async transactionCreationMsgDisplayed(){
       return await this.transactionCreationMsg.isDisplayed();
    }

    async transactionDetailScreenDisplay(){
       return  await this.trasactionDetailsScreen.isDisplayed(); 
    }

    async trasactionNoDisplay(){
      return  await this.transactionNo.isDisplayed(); 
    }

    async clickMakePaymentBtn(){
        await this.makePaymentBtn.click();
    }

    async makePaymentScreenDisplay(){
        return this.makePaymentScreen.isDisplayed();
    }
}


export default new BeneficiaryPage();
