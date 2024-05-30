import { $ } from '@wdio/globals'

class iosDashboardPage {

    /**
     * define selectors using getter methods
     */
    get countryName (){
        return $('~Bangladesh');
    }

    get amountField(){
        return $('(//XCUIElementTypeTextField[@name="Amount"])[1]');
    }

    get exchanageRate(){
        return $('//XCUIElementTypeStaticText[contains(@name,"BDT ")]');
    }

    get sendNowBtn(){
        return $('~Send Now')
    }

    get continueBtn(){
       return $('//XCUIElementTypeButton[@name="Continue"]')
       // return $('~Continue')
    }

    get confirmTransactionScreen(){
        return $('~Confirm Transaction')
    }

    get confirmButton(){
        return $('~Confirm')
    }

    get transactionDetailsScreen(){
        return $('~Transaction Details')
    }

    get transactionCreatedMsg(){
        return $('~Transaction has been created')
    }

    get makePaymentBtn(){
        return $('~Make Payment')
    }

    get worldPayScreen(){
        return $('~Payments powered by WordPay')
    }

    get beneficiaryScreen(){
        return $('~Select Beneficiary')
    }

    get beneficiaryName(){
        return $('(//*[@type="XCUIElementTypeStaticText"])[1]')
    }

    get confirmBtn(){
        return $('~Confirm')
    }

    get transactionTypeScreen(){  
    // const selector = `label == "Select Transaction Type"`
    // return $(`-ios predicate string:${selector}`)
    //   return $('(//*[@name="Select Transaction Type"])[1]')
    // const classChainSelector = '**/XCUIElementTypeOther[`name == "Select Transaction Type"`][1]';
    // return $(`-ios class chain:${classChainSelector}`);
           return $('(//XCUIElementTypeOther[@name="Select Transaction Type"])[2]')
    }

    get cardTransferOption(){
        return $('~Card Transfer')
    }

     get cardTransferScreen(){
        const selector = 'name == "Card Transfer Details" AND label == "Card Transfer Details" AND type == "XCUIElementTypeOther"'
        return $(`-ios predicate string:${selector}`)
      //  return $('//XCUIElementTypeOther[@name="Card Transfer Details"]')
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
        return $('~Next')
     }

     get paymentMethodScreen(){
        return $('~Select Payment Method')
     }

     get paymentMethod(){
        return $('~Card (WorldPay)')
     }
    
     get completeTransactionScreen(){
        return $('~Complete Transaction')
     }
     

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async verifyCountryDisplayOnDahboard(){
        return (await this.countryName).isDisplayed();
    }

    async enterAmount(){
        await (await this.amountField).waitForDisplayed({timeout:30000});
        await this.amountField.click();
        await this.amountField.setValue("2");
    }

    async verifyExchangeRateDisplayed(){
        await (await this.exchanageRate).waitForDisplayed({timeout:30000});
        return  await this.exchanageRate.isDisplayed();
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

    async transactionTypeScreenDisplayed(){
    return await this.transactionTypeScreen.isDisplayed();
    }

    async clickCardTransfer(){
        await this.cardTransferOption.click();
    }

    async verifyCardTransferScreenDisply(){
        return  await (await this.cardTransferScreen).isDisplayed();
    }

    async fillCardTransferForm(){
        await this.cardNumber.click();
        await (await this.cardNumber).setValue("4242424242424242");
        await (await this.sourceIncomeDropdown).click();
        await (await this.dropdownOption).click();
        await (await this.remittanceDropdown).click();
        await (await this.dropdownOption).click();
        await(await this.nextButton).click();
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
        await this.sendNowBtn.click(); 
    }

    async confirmTransactionScreenDisplay(){
            try {        
                try {
                    await (await this.continueBtn).waitForDisplayed({ timeout:30000 });
                    await this.continueBtn.click();
                } catch (e) {
                    console.log('Continue button not displayed within timeout.');
                }
                const confirmTransactionScreenDisplayed = await this.confirmTransactionScreen.isDisplayed();
                return confirmTransactionScreenDisplayed;
            } catch (error) {
                console.error('Error in confirmTransactionScreenDisplay:', error);
                return false;
            }
        }

    async clickConfirmutton(){
        await (await this.confirmButton).click(); 
    }

    async transactionDetailsScreenDisplay(){
        return await (await this.transactionDetailsScreen).isDisplayed();
    }

    async transactionCreationMsgDisplyed(){
        await (await this.transactionCreatedMsg).waitForDisplayed({timeout:30000});
        return await (await this.transactionCreatedMsg).isDisplayed();
    }

    async clickMakePaymentBtn(){
        await (await this.makePaymentBtn).click(); 
    }

    async worldPayScreenDisplayed(){
        await (await this.worldPayScreen).waitForDisplayed({timeout:30000});
       return await (await this.worldPayScreen).isDisplayed();
    }

    async clickConfirmBtn(){
        await (await this.confirmBtn).click(); 
    }

}
export default new iosDashboardPage();




