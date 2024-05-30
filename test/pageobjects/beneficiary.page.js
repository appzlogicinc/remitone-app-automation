import { $ } from '@wdio/globals'
import Page from './page.js';
import {beneficiaryDetails} from '../../testData/BeneficiaryData.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BeneficiaryPage {
    constructor() {
        this.uniqueFirstName = '';
    }

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
        return $('//android.view.View[@content-desc="Personal Details"]/following-sibling::android.widget.EditText[1]')
    }

    get inputLastname (){
        return $('//android.view.View[@content-desc="Personal Details"]/following-sibling::android.widget.EditText[3]')
    }

    get inputMobileno (){
        return $('//*[@class="android.widget.EditText"][4]')
    }

    get inputAddress (){
        return $('//android.view.View[@content-desc="Contact Details"]/following-sibling::android.widget.EditText[3]')
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
        return $('//android.view.View[@content-desc="Contact Details"]/following-sibling::android.widget.EditText[6]')
    }

    get enterPostcodeField(){
        return $('//android.view.View[@content-desc="ID Details"]/preceding-sibling::android.widget.EditText[1]')
    }

    get idType (){
       return $('//android.widget.ImageView[contains(@content-desc,"Identification Type ")]')
    }

    get passport (){
        const selector= 'new UiSelector().descriptionContains("PASSPORT")';
        return $(`android=${selector}`);
    } 

    get addedBeneficiary(){
        const xpath = `//android.view.View[contains(@content-desc,"${this.uniqueFirstName}")]`;
        return $(xpath);
    }

    get saveButton (){
        return $('~Save');
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
        const selector = 'new UiSelector().descriptionContains("MOHAMMAD")'
        return $(`android=${selector}`)
    }

    get beneficiaryDetailsScreen(){
        const selector = 'new UiSelector().descriptionContains("Beneficiary Details")'
        return $(`android=${selector}`)
    }

    get SendMoneyBtn(){
        return $('~Send Money')
        // const selector = 'new UiSelector().descriptionContains("Send Money")'
        // return $(`android=${selector}`) 
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

   get editBeneficiaryScreen(){
     return $('~Edit Beneficiary')
   }

   get editBtn(){
    return $('//android.view.View[@content-desc="Beneficiary Details"]/following-sibling::android.widget.ImageView')
//    const selector = 'new UiSelector().description("Edit beneficiary")'
//     return $(`android=${selector}`) 
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

       get searchBeneficioaryField(){
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
        await (await this.addBeneficiaryBtn).waitForDisplayed();
      return await (await this.addBeneficiaryBtn).isDisplayed();       
    }
    
    async clickAddbeneficiaryBtn(){
        await this.addBeneficiaryBtn.click()
    }

    async verifyAddBeneficiaryScreenDisply(){
       return await this.addBeneficiaryScreen.isDisplayed();       
    }

    async fetchRandomFirstName() {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const firstName = data.results[0].name.first;
            return firstName;
        } catch (error) {
            console.error('Error fetching random name:', error);
            return 'DefaultFirstName'; // Fallback name in case of an error
        }
    }

    async enterFirstName(){
        browser.hideKeyboard();
        await this.inputFirstname.click();
        const randomFirstName = await this.fetchRandomFirstName();
        this.uniqueFirstName = `${randomFirstName}`.toUpperCase();
        await this.inputFirstname.setValue(this.uniqueFirstName);
        console.log(this.uniqueFirstName);
        return this.uniqueFirstName;
    }

    async enterLastName(){
        browser.hideKeyboard();
        await this.inputLastname.click();
        await this.inputLastname.setValue("Test");

    }

    async enterMobileNo(){
        browser.hideKeyboard();
        await this.inputMobileno.click();
        await this.inputMobileno.setValue("9876543210");
    }

    async enterAddress(){
        browser.hideKeyboard();
        await (await this.inputAddress).click();
        await this.inputAddress.setValue("Block A, street 4");
    }

    async enterZipcode(){
        browser.hideKeyboard();
        await (await this.enterPostcode).click();
        await this.enterPostcodeField.setValue("123456");
    }

    async selectIdentificationType(){
        browser.hideKeyboard();
        await (await this.idType).click();
        await (await this.passport).click();
    }

    async verifyBeneficiaryAdded()
    { 
            (await this.addBeneficiaryBtn).waitForDisplayed({timeout:30000});
            console.log(this.uniqueFirstName);
            await (await this.addedBeneficiary).waitForDisplayed({timeout:30000});
            return await (await this.addedBeneficiary).isDisplayed();
    }

    async clickOnBeneficiary(){
        await this.beneficiaryName.click();
    }

    async verifyBeneficiaryDetailsScreenDisply(){
        await (await this.beneficiaryDetailsScreen).waitForDisplayed({timeout:30000});
        return await this.beneficiaryDetailsScreen.isDisplayed();
    }
    
    async clickSendMoneyBtn(){
        await (await this.SendMoneyBtn).click();
    }

    async verifyTransactionTypeScreenDisply(){
        await (await this.TransactionTypeScreen).waitForDisplayed({timeout:30000});
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
        await (await this.editBtn).click();
    }

    async verifyEditBeneficiaryScreen(){
        await (await this.editBeneficiaryScreen).waitForDisplayed({timeout:30000});
        return await (await this.editBeneficiaryScreen).isDisplayed(); 
    }

    async editDetails(){
        function generateRandomMobileNumber() {
            let randomNumber = '';
            for (let i = 0; i < 10; i++) {
              randomNumber += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
            }
            return randomNumber;
          }
          const randomMobileNumber = generateRandomMobileNumber();
          await (await this.inputMobileno).click();
          await this.inputMobileno.setValue(randomMobileNumber);
    }

    async clickSaveBtn(){
        await (await this.saveButton).click();
    }
       
    async verifyBeneficiaryUpdatedMsg(){
        try {
            await (await this.beneficiaryUpdatedMsg).waitForDisplayed({timeout:30000});
            console.log("beneficiary test"+(await this.beneficiaryUpdatedMsg).getText());
            return await (await this.beneficiaryUpdatedMsg).isDisplayed();
        } catch (error) {
            console.error("Error occurred while verifying text:", error);
    }
}

    async paymentMethodScreenDisplay(){
        await (await this.paymentMethodScreen).waitForDisplayed({timeout:30000});
       return await (await this.paymentMethodScreen).isDisplayed();
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
        await(await this.transactionCreationMsg).waitForDisplayed({timeout:30000});
       return await(await this.transactionCreationMsg).isDisplayed();
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
    
    async enterBeneficiaryName(){
        await this.searchBeneficioaryField.click();
    }
}


export default new BeneficiaryPage();
