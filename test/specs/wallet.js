import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect, should } from 'chai';
import walletPage from '../pageobjects/wallet.page.js';


describe('Load Wallet', () => {
    it('Verify Load your wallet functionality', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
    //    chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await WalletPage.clickWalletBtn();
       chaiExpect(await WalletPage.verifyWalletScreen()).to.be.true;
       await WalletPage.clickLoadWalletButton();
       chaiExpect(await WalletPage.verifyLoadWalletScreen()).to.be.true;
       await WalletPage.enterRequiredFields();
       chaiExpect(await WalletPage.verifyInfoText()).to.be.true;
       chaiExpect(await WalletPage.verifypaymentinfotext()).to.be.true;
       await WalletPage.clickLoadWalletBtn();
       chaiExpect(await WalletPage.verifyReviewScreen()).to.be.true;
       await WalletPage.clickConfirmLoadWalletBtn();
       chaiExpect(await WalletPage.verifyLoadWalletConfirmScreen()).to.be.true;
       await WalletPage.clickCanclePaymentBtn();
       chaiExpect(await WalletPage.verifyCancellationText()).to.be.true;
       await WalletPage.clickCancleConfirmBtn();  
       chaiExpect(await WalletPage.verifyCancelTransferMessage()).to.be.true;    
    })
})

describe('Load Wallet', () => {
    it('Verify move funds functionality', async () => {
        await LoginPage.clickLoginBtn();
        await LoginPage.login('dhawal@appzlogic.com', 'Appzlogic@123');
    //    chaiExpect(await LoginPage.verifyUserLoggedin()).to.be.true;
        await WalletPage.clickWalletBtn();
       chaiExpect(await WalletPage.verifyWalletScreen()).to.be.true;
       await WalletPage.clickMoveButton();
       chaiExpect(await WalletPage.verifyMoveFundsScreen()).to.be.true;
       chaiExpect(await WalletPage.verifyMoveFundInfoText()).to.be.true;
       await WalletPage.enterCurrencyDetails();
       await walletPage.clickMoveFundsbutton();
       chaiExpect(await WalletPage.verifyInsufficientFundsMsg()).to.be.true;
 
    })
})

