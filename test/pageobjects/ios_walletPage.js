import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ios_WalletPage {

    /**
     * define selectors using getter methods
     */

    get walletBtn(){
        return $('~Wallet')
    }

    get walletScreen(){
        return $('~Wallets')
    }

    get loadWalletBtn(){
        return $('~Load Wallet')
    }

    get loadWalletScreen(){
        return $('~Load Your Wallet') 
    }

    get selectCurrency(){
        return $('~Select Currency ') 
    }

    get clickCurrency(){
        return $('~USD') 
    }

    get loadAmount(){
        return $('//XCUIElementTypeTextField[contains(@name,"Load Amount")]') 
    }

    get selectPaymentMethod(){
        return $('~Select Payment Method ') 
    }

    get paymentOption(){
        return $('~card') 
    }

    get loadinfoText(){
        return $('~Please fill out the relevant information and proceed to transfer funds between your wallets.')
    }

    get paymentnfoText(){
       return  $('~Once a new amount is entered or payment method is changed, the changes will be recalculated')
    }

    get reviewScreen(){
        return $('~Load Your Wallet - Review') 
    }

    get loadWalletConfirm(){
        return $('~Confirm Load Wallet') 
    }

    get loadWalletConfirmScrn(){
        return $('~Load Your Wallet - Confirm') 
    }

    get makePayment(){
        return $('~Make Payment') 
    }

    get paymentMethods(){
        return $('//XCUIElementTypeStaticText[@name="Please select your payment method"]') 
    }

    get moveBtn(){
        return $('~Move Funds') 
    }

    get moveFundsScreen(){
        return $('~Move Funds Between Wallets') 
    }

    get moveFundsInfo(){
        return $('~Please fill out relevant information and proceed to load your wallet balance.') 
    }

    get enterSendAmt(){
        return $('//XCUIElementTypeTextField[contains(@name,"Send Amount")]') 
    }

    get selectFrom(){
        return $$('//XCUIElementTypeButton[@name="Select From "]')
    }

    get selectCurrencyFromDropdown(){
        return $('~AED') 
    }

    get selectCurrencyTodropdowan(){
        return $('~USD') 
    }

    get insufficientErr(){
        return $('//XCUIElementTypeStaticText[contains(@name,"* You cannot transfer more than your current sending wallet balance.")]') 
    }

    get sendToWallet(){
        return $('~Send To Wallet')
    }

    get searchField(){
        return $('~Search Beneficiary By Email or Phone Number...')
    }

    get searchButton(){
        return $('//*[@type="XCUIElementTypeTextField"]/following-sibling::XCUIElementTypeOther')
    }

    get beneficiaryName(){
        return $('//XCUIElementTypeStaticText[contains(@name,"MOHAMMAD")]')
    }

    get beneficiaryDetails(){
        return $('~Beneficiary Details')
    }

    get sendMoneyBtn(){
        return $('~Send Money')
    }

    get paymentMethodScreen(){
        return $('~Select Payment Method')
    }

    get paymentMethod(){
        return $('~Card (WorldPay)')
    }

    get completeTrasactionScreen(){
        return $('~Complete Transaction')
    }

    get currenyDropdown(){
        return $('~EUR')
    }

    get selectCurrency(){
        return $('~USD')
    }

    get amountField(){
        return $('(//XCUIElementTypeTextField[@name="Amount"])[1]')
    }

    get sendNowBtn(){
        return $('~Send Now')
    }

    get confirmTrasactionScreen(){
        return $('~Confirm Transaction')
    }

    get confirmBtn(){
        return $('~Confirm')
    }


       /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickWalletBtn (){
        await this.walletBtn.click(); 
    }

    async verifyWalletScreen(){
        return this.walletScreen.isDisplayed();
    }

    async clickLoadWalletButton(){
            await this.loadWalletBtn.click(); 
    }

    async verifyLoadWalletScreen(){
        return  (await this.loadWalletScreen).isDisplayed();
    }

    async enterRequiredFields(){
       await (await this.selectCurrency).click();
        await (await this.clickCurrency).click();
        await (await this.loadAmount).click();
        await (await this.loadAmount).setValue('1');
        await (await this.selectPaymentMethod).click();
        await (await this.paymentOption).click();
      }
  
    async verifyInfoText(){
        await (await this.loadinfoText).waitForDisplayed({timeout:30000});
        return  await (await this.loadinfoText).isDisplayed();
    }

    async verifypaymentinfotext(){
        return  (await this.paymentnfoText).isDisplayed();
  
    }
  
    async clickLoadWalletBtn(){
        await (await this.loadWalletBtn).click();
    }

    async verifyReviewScreen(){
       return await (await this.reviewScreen).isDisplayed();
    }
  
    async clickConfirmLoadWalletBtn(){
        await this.loadWalletConfirm.click();
    }
  
    async verifyLoadWalletConfirmScreen(){
        return  (await this.loadWalletConfirmScrn).isDisplayed();
    }
       
    async clickMakePaymentBtn(){
        await this.makePayment.click();
    }
    
    async verifyMakePaymentScreen(){
         await (await this.makePayment).waitForDisplayed();
        return await this.makePayment.isDisplayed();
    }

    async verifyPaymentMethod(){
        await (await this.paymentMethods).waitForDisplayed({timeout:30000});
        return await this.paymentMethods.isDisplayed();
    }

    async clickMoveButton(){
        await this.moveBtn.click(); 
    }

    async verifyMoveFundsScreen(){
        return  (await this.moveFundsScreen).isDisplayed();
    }

    async verifyMoveFundInfoText(){
        await (await this.moveFundsInfo).waitForDisplayed({timeout:30000})
        return  (await this.moveFundsInfo).isDisplayed();
    }

    async enterCurrencyDetails(){
        await this.enterSendAmt.click();
        await this.enterSendAmt.setValue("1");
        await this.selectFrom[0].click();
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
          await this.moveBtn.click();
    }

    async verifyInsufficientFundsMsg(){
        await(await this.insufficientErr).waitForDisplayed();
        return  await(await this.insufficientErr).isDisplayed();
    }

    async clickSendTowallet(){
        await (await this.sendToWallet).click();
    }

    async verifysendToWalletScreen(){
        return await (await this.sendToWallet).isDisplayed();
    }

    async enterEmailInSearchField(){
        await (await this.searchField).click();
        await (await this.searchField).setValue("usman@easyss.net");
        await (await this.searchButton).click();

    }

    async verifyBeneficiaryDisplyed(){
        await (await this.beneficiaryName).waitForDisplayed({timeout:30000})
        return await (await this.beneficiaryName).isDisplayed();
    }

    async selectBeneficiary(){
        await (await this.beneficiaryName).click();
    }
    
    async verifyBeneficiaryDetailsScreenDisply(){
        await (await this.beneficiaryDetails).waitForDisplayed({timeout:30000})
        return await (await this.beneficiaryDetails).isDisplayed();
    }

    async clickSendMoneyBtn(){
        await (await this.sendMoneyBtn).click();
    }

    async paymentMethodScreenDisplay(){
        return await (await this.paymentMethodScreen).isDisplayed(); 
    }

    async selectPaymentOption(){
        await (await this.paymentMethod).click();
    }

    async completeTrasactionScreenDisplay(){
        await (await this.completeTrasactionScreen).waitForDisplayed({timeout:30000});
        return await (await this.completeTrasactionScreen).isDisplayed(); 
    }

    async selectReceiveCurrency(){
        await (await this.currenyDropdown).click();
        await (await this.selectCurrency).click();
    }

    async enterAmountToTransfer(){
        await (await this.amountField).click();
        await (await this.amountField).setValue("2");
        async function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
          console.log('Start');
          // Sleep for 2 seconds (2000 milliseconds)
          await sleep(10000);
          console.log('End');
    }

    async clickSendNowBtn(){
        await (await this.sendNowBtn).click();
    }

    async confirmTransactionScreenDisplay(){
        await (await this.confirmTrasactionScreen).waitForDisplayed({timeout:30000});
        return await (await this.confirmTrasactionScreen).isDisplayed(); 
    }

    async clickConfirmBtn(){
        await (await this.confirmBtn).click();
    }
}

    export default new ios_WalletPage();
    