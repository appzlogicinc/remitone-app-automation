import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WalletPage {
    /**
     * define selectors using getter methods
     */

    get walletBtn(){
      const selector = 'new UiSelector().description("Wallet")';
        return $(`android=${selector}`);
    }

    get walletScreen(){
        const selector = 'new UiSelector().description("Wallets")';
          return $(`android=${selector}`);
      }

      get loadWallet(){
        const selector = 'new UiSelector().description("Load Wallet")';
          return $(`android=${selector}`);
      }

      get loadWalletScreen(){
        const selector = 'new UiSelector().description("Load Your Wallet")';
          return $(`android=${selector}`);
      }

      get loadinfoText(){
        const selector = 'new UiSelector().description("Please fill out the relevant information and proceed to transfer funds between your wallets.")';
          return $(`android=${selector}`);
      }

      get selectCurrency(){
        const selector = 'new UiSelector().descriptionContains("Select Currency")';
        return $(`android=${selector}`)
      }

      get clickCurrency(){
        const selector = 'new UiSelector().description("USD")';
          return $(`android=${selector}`);
      }

      get loadAmount(){
        const selector = 'new UiSelector().className("android.widget.EditText")';
        return $(`android=${selector}`);
      }

      get selectPaymentMethod(){
        const selector = 'new UiSelector().descriptionContains("Select Payment Method")';
        return $(`android=${selector}`)
      }

      get paymentOption(){
        const selector = 'new UiSelector().description("card")';
        return $(`android=${selector}`);
      }

      get paymentnfoText(){
        const selector = 'new UiSelector().description("Once a new amount is entered or payment method is changed, the changes will be recalculated")';
        return $(`android=${selector}`);
      }

      get loadWalletBtn(){
        return $('~Load Wallet')
      //  const selector = 'new UiSelector().description("WalletLoadRoute, Load Wallet")';
      //  return $(`android=${selector}`)
      }

      get loadWalletConfirm(){
        return $('~Confirm Load Wallet')
      }

      get reviewScreen(){
        const selector = 'new UiSelector().description("Load Your Wallet - Review")';
        return $(`android=${selector}`);
      }

      get loadWalletConfirmScrn(){
        const selector = 'new UiSelector().description("Load Your Wallet - Confirm")';
        return $(`android=${selector}`);
      }

      get moveBtn(){
        const selector = 'new UiSelector().description("Move Funds")';
        return $(`android=${selector}`); 
      }

      get moveFundsScreen(){
        const selector = 'new UiSelector().description("Move Funds Between Wallets")';
        return $(`android=${selector}`); 
      }

      get moveFundsInfo(){
        const selector = 'new UiSelector().description("Please fill out relevant information and proceed to load your wallet balance.")';
        return $(`android=${selector}`); 
      }

      get selectFrom(){
        // const selector = 'new UiSelector().className("android.widget.ImageView")';
        // return $$(`android=${selector}`);
        return $$('//*[@class="android.widget.ImageView"]');
      }

      get selectCurrencyFromDropdown(){
        const selector = 'new UiSelector().description("AED")';
        return $(`android=${selector}`); 
      }

      get selectTo(){
        const selector = 'new UiSelector().description("WalletMoveFundRoute, null Select From ")';
        return $(`android=${selector}`);
      }

      get selectCurrencyTodropdowan(){
        const selector = 'new UiSelector().description("USD")';
        return $(`android=${selector}`); 
      }

      get enterSendAmt(){
        const selector = 'new UiSelector().className("android.widget.EditText")';
        return $(`android=${selector}`); 
      }

      get moveFundsbutton(){
        const selector = 'new UiSelector().description("Move Funds")';
        return $(`android=${selector}`); 
      }

      get insuficientErr(){
        const selector = 'new UiSelector().descriptionContains("* You cannot transfer more than your current sending wallet balance.")';
        return $(`android=${selector}`); 
      }

      get sendWalletBtn(){
        const selector = 'new UiSelector().descriptionContains("Send To Wallet")';
        return $(`android=${selector}`);  
      }

      get sendToWalletScreen(){
        const selector = 'new UiSelector().descriptionContains("Send To Wallet")';
        return $(`android=${selector}`);  
      }

      get searchField(){
        const selector = 'new UiSelector().className("android.widget.EditText")';
        return $(`android=${selector}`);  
      }

      get searchButton(){
        const selector = 'new UiSelector().className("android.view.View")';
        return $$(`android=${selector}`); 
      }

      get beneficiary(){
        const selector = 'new UiSelector().descriptionContains("MOHAMMAD")';
        return $(`android=${selector}`);  
      }

      get AmountField(){
        const selector = 'new UiSelector().textContains("Amount")'
        return $$(`android=${selector}`) 
      }

       get senNowBtn(){
        const selector = 'new UiSelector().description("CreateWalletTransactionRoute, Send Now")'
        return $(`android=${selector}`) 
       }

       get makePayment(){
        return $('~Make Payment');
       }

       get makePaymentScreen(){
        return $('//android.view.View[@content-desc="Make Payment"]');
       }

       get paymentMethods(){
        const selector = 'new UiSelector().className("android.view.View")';
        return $$(`android=${selector}`); 
       }

       get confirmationCodeField(){
        const selector = 'new UiSelector().text("SMS Verification Code")'
        return $(`android=${selector}`) 
       }
  
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickWalletBtn (){
        await this.walletBtn.click(); 
      }

    async verifyWalletScreen(){
      await (await this.walletScreen).waitForDisplayed();
     return  (await this.walletScreen).isDisplayed();

    }

    async clickLoadWalletButton(){
      await this.loadWallet.click(); 
    }

    async verifyLoadWalletScreen(){
      return  (await this.loadWalletScreen).isDisplayed();
    }

    async verifyInfoText(){
      return  (await this.loadinfoText).isDisplayed();

    }

    async enterRequiredFields(){
      await this.selectCurrency.click();
      await this.clickCurrency.click();
      await this.loadAmount.click();
      await this.loadAmount.setValue('1');
      await this.selectPaymentMethod.click();
      await this.paymentOption.click();

    }

    async verifypaymentinfotext(){
      return  (await this.paymentnfoText).isDisplayed();

    }

    async clickLoadWalletBtn(){
      (await this.loadWalletBtn).waitForClickable();
      await this.loadWalletBtn.click();
    }

   async verifyReviewScreen(){
      return  (await this.reviewScreen).isDisplayed();
    }

    async clickConfirmLoadWalletBtn(){
      await this.loadWalletConfirm.click();
    }

    async verifyLoadWalletConfirmScreen(){
      return  (await this.loadWalletConfirmScrn).isDisplayed();
    }

    async clickMoveButton(){
      await this.moveBtn.click();
    }

    async verifyMoveFundsScreen(){
      return  (await this.moveFundsScreen).isDisplayed();
    }

    async verifyMoveFundInfoText(){
      return  (await this.moveFundsInfo).isDisplayed();
    }

    async enterCurrencyDetails(){
      await this.enterSendAmt.click();
      await this.enterSendAmt.setValue("1");
      await this.selectFrom[2].click();
      (await this.selectCurrencyFromDropdown).click();
      await this.selectFrom[0].click();
      (await this.selectCurrencyTodropdowan).click();
    
    }

    async clickMoveFundsbutton(){
      async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      console.log('Start');
      // Sleep for 2 seconds (2000 milliseconds)
      await sleep(9000);
      console.log('End');
      await this.moveFundsbutton.click();
    }

    async verifyInsufficientFundsMsg(){
      await (await this.insuficientErr).waitForDisplayed();
      return  (await this.insuficientErr).isDisplayed();
    }

    async clickSendTowallet(){
       (await this.sendWalletBtn).click();
    }

    async verifysendToWalletScreen(){
      return  (await this.sendToWalletScreen).isDisplayed();
    }
    
    async enterEmailInSearchField(){
      (await this.searchField).click();
      this.searchField.setValue("usman@easyss.net");
      this.searchButton[2].waitForClickable();
      this.searchButton[2].click();
    }

    async verifyBeneficiaryDisplyed(){
      await (await this.beneficiary).waitForDisplayed();
      return  (await this.beneficiary).isDisplayed();
    }

    async selectBeneficiary(){
      (await this.beneficiary).click();
    }

    async enterAmountToTransfer(){
      await this.AmountField[1].click();
      await this.AmountField[1].setValue("2");
      async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      console.log('Start');
      // Sleep for 2 seconds (2000 milliseconds)
      await sleep(5000);
      console.log('End');
   }

    async clickSendNowBtn(){ 
     await this.senNowBtn.click();
     async function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    console.log('Start');
    // Sleep for 2 seconds (2000 milliseconds)
    await sleep(5000);
    console.log('End');
  }

  async clickMakePaymentBtn(){
    await this.makePayment.click();
  }

  async verifyMakePaymentScreen(){
     await (await this.makePaymentScreen).waitForDisplayed();
    return await this.makePaymentScreen.isDisplayed();

  }

  async verifyPaymentMethod(){

    await (await this.paymentMethods[2]).waitForDisplayed();
    return await this.paymentMethods[2].isDisplayed();
  }

   async confimationCodeFieldDispaly(){
        return await this.confirmationCodeField.isDisplayed();
    }
}

export default new WalletPage();
