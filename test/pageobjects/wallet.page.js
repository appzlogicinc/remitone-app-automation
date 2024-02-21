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
        const selector = 'new UiSelector().textContains("Load Amount")';
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
       // return $('~Load Wallet')
       const selector = 'new UiSelector().description("WalletLoadRoute, Load Wallet")';
       return $(`android=${selector}`)
      }

      get loadWalletConfirm(){
        return $('~WalletLoadWalletDetailsRoute, Confirm Load Wallet')
      }

      get reviewScreen(){
        const selector = 'new UiSelector().description("Load Your Wallet - Review")';
        return $(`android=${selector}`);
      }

      get loadWalletConfirmScrn(){
        const selector = 'new UiSelector().description("Load Your Wallet - Confirm")';
        return $(`android=${selector}`);
      }

      get cancleBtn(){
        const selector = 'new UiSelector().description("WalletLoadConfirmPaymentRoute, Cancel Payment")';
        return $(`android=${selector}`); 
      }

      get cancellationText(){
        const selector = 'new UiSelector().description("Confirm Cancellation")';
        return $(`android=${selector}`); 
      }

      get cancleConfirmBtn(){
        const selector = 'new UiSelector().description("WalletLoadConfirmPaymentRoute, Cancel")';
        return $(`android=${selector}`); 
      }

      get transferCancleMsg(){
        const selector = 'new UiSelector().description("Wallet Transaction was cancelled")';
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
        const selector = 'new UiSelector().className("android.widget.ImageView")';
        return $$(`android=${selector}`);
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
        const selector = 'new UiSelector().textContains("Send Amount")';
        return $(`android=${selector}`); 
      }

      get moveFundsbutton(){
        const selector = 'new UiSelector().description("WalletMoveFundRoute, Move Funds")';
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
        const selector = 'new UiSelector().text("Search Beneficiary By Email...")';
        return $(`android=${selector}`);  
      }

      get beneficiary(){
        const selector = 'new UiSelector().descriptionContains("MOHAMMAD")';
        return $(`android=${selector}`);  
      }
  
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickWalletBtn (){
        await this.walletBtn.click(); 
      }

    async verifyWalletScreen(){
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

    async clickCanclePaymentBtn(){
      (await this.cancleBtn).click();
    }

    async clickCancleConfirmBtn(){
      (await this.cancleConfirmBtn).click();
    }

    async verifyCancellationText(){
      return  (await this.cancellationText).isDisplayed();
    }

    async verifyCancelTransferMessage(){
      return  (await this.transferCancleMsg).isDisplayed();
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
      await this.selectFrom[0].click();
      (await this.selectCurrencyFromDropdown).click();
      await this.selectFrom[2].click();
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
    }

    async verifyBeneficiaryDisplyed(){
      await (await this.beneficiary).waitForDisplayed();
      return  (await this.beneficiary).isDisplayed();
    }

    async selectBeneficiary(){
      (await this.beneficiary).click();
    }
}

export default new WalletPage();
