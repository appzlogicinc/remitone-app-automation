import { $ } from '@wdio/globals'

class iosDashboardPage {

    /**
     * define selectors using getter methods
     */
    get countryDropdown (){
        return $('~Bangladesh');
    }

    get countryName(){
        return $('~Afghanistan');
    }

    get amountField(){
        return $('(//XCUIElementTypeTextField[@name="Amount"])[1]');
    }

    get sendNowBtn(){
        return $('~HomeRoute, Send Now')
    }

    get beneficiaryScreen(){
        return $('~Select Beneficiary')
    }

    get beneficiaryName(){
        return $('(//*[@type="XCUIElementTypeStaticText"])[1]')
    }

    get selectBeneficiaryTypeScreen(){  
    const selector = `label == "Select Transaction Type"`
    return $(`-ios predicate string:${selector}`)
      //  return $('//XCUIElementTypeOther[@name="Select Transaction Type"]')
    }

    get cardTrasnferOption(){
        return $('~Card Transfer')
    }

     get cardTransferScreen(){
        return $('//XCUIElementTypeOther[@name="Card Transfer Details"]')
        // const selector = `label == "Card Transfer Details" AND name == "Card Transfer Details" AND type == "XCUIElementTypeOther"`
        // return $(`-ios predicate string:${selector}`)
     }

     get cardNumber(){
        const selector = `type == 'XCUIElementTypeTextField' && name CONTAINS 'Card Number'`
        return $(`-ios predicate string:${selector}`)
    //    return $('~CreateTransactionRoute, null Card Number *')
     }

     get sourceIncomeDropdown(){
        const selector = `type == 'XCUIElementTypeButton' && name CONTAINS 'Source of Income'`
        return $(`-ios predicate string:${selector}`)
       // return $('~CreateTransactionRoute, null Source of Income')
     }

     get dropdownOption(){
        return $('(//*[@type="XCUIElementTypeStaticText"])[1]')
     }

     get remittanceDropdown(){ 
        const selector = `type == 'XCUIElementTypeButton' && name CONTAINS 'Purpose of Remittance'`
        return $(`-ios predicate string:${selector}`)
     //   return $('~CreateTransactionRoute, null Purpose of Remittance Purpose of Remittance')
     }

     get nextButton(){
        return $('~CreateTransactionRoute, Next')
     }

     get paymentMethodScreen(){
        return $('~Select Payment Method')
     }

     get paymentMethod(){
        return $('~Card (Worldline)')
     }
    
     get completeTransactionScreen(){
        return $('~Complete Transaction')
     }

     get sendButton(){
        return $('~CreateTransactionRoute, Send Now')
     }
     

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickCountryDropdown(){
        await this.countryDropdown.click();
       }

    async selectCountry(){
        await this.countryName.click();
    }

    async selectedCounteryDisplayed(){
        return (await this.countryName).isDisplayed();
    }

    async enterAmount(){
        await this.amountField.click();
        await this.amountField.setValue("2");
    }

    async clickSendNowBtn(){
        await this.sendNowBtn.click();
    }

    async beneficiaryScreenDisplayed(){
        await (await this.beneficiaryScreen).waitForDisplayed();
      return  (await this.beneficiaryScreen).isDisplayed();
    }

    async selectBeneficiary(){
        await this.beneficiaryName.click();
    }

    async beneficiaryTypeScreenDisplayed(){
        (await this.selectBeneficiaryTypeScreen).waitForDisplayed();
       return  await this.selectBeneficiaryTypeScreen.isDisplayed();
    }

    async clickCardTrasnfer(){
        (await this.cardTrasnferOption).click();
    }

    async verifyCardTransferScreenDisply(){
        (await this.cardTransferScreen).waitForDisplayed();
        return  await this.cardTransferScreen.isDisplayed();
    }

    async fillCardTransferForm(){
        await this.cardNumber.click();
        (await this.cardNumber).clearValue();
        (await this.cardNumber).setValue("4242424242424242");
        (await this.sourceIncomeDropdown).click();
        (await this.dropdownOption).click();
        (await this.remittanceDropdown).click();
        (await this.dropdownOption).click();
        (await this.nextButton).click();
    }

    async paymentMethodScreenDisplay(){
        await (await this.paymentMethodScreen).waitForDisplayed();
        return (await this.paymentMethodScreen).isDisplayed();
    }

    async selectPaymentMethod(){
        await this.paymentMethod.click();
    }

    async completeTrasactionScreenDisplay(){
        await (await this.completeTransactionScreen).waitForDisplayed();
       return (await this.completeTransactionScreen).isDisplayed();
    }

    async clickSendButton(){
        await this.sendButton.click(); 
    }

}
export default new iosDashboardPage();




