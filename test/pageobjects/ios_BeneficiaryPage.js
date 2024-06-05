import { $ } from '@wdio/globals'

class iosBeneficiaryPage {
  constructor() {
    this.uniqueFirstName = '';
}

    /**
     * define selectors using getter methods
     */

get beneficiaryBtn(){
    return $(`//XCUIElementTypeImage[contains(@name,"Beneficiary")]`)
}

get addBeneficiaryBtn(){
  return $('~Add Beneficiary');
}

get addBeneficiaryScreen(){
  return $('~Create Beneficiary')
}

get inputFirstname (){
    return $(`//XCUIElementTypeTextField[contains(@name,"First Name *")]`)
}

get inputLastname (){
    return $(`//XCUIElementTypeTextField[contains(@name,"Last Name *")]`)
}

get  inputMobileNo (){
    return $(`//XCUIElementTypeTextField[contains(@name,"Mobile Number ")]`)
}

get inputAddress(){
  return $('//XCUIElementTypeTextField[contains(@name,"Address 1 ")]')
}

get inputZipcode(){
  return $('//XCUIElementTypeTextField[contains(@name,"Postcode / Zipcode ")]')
}

get idType(){
  return $('//XCUIElementTypeButton[contains(@name,"Identification Type ")]')
}

get selectPassoprtoption(){
  return $('//XCUIElementTypeStaticText[@name="PASSPORT"]')
}

get saveBtn(){
  return $('~Save')
}

get addedBeneficiary(){ 
  const xpath = `//XCUIElementTypeStaticText[contains(@name,${this.uniqueFirstName})]`;
  return $(xpath);
}

get beneficiaryDetailScreen(){
  return $('~Beneficiary Details')
}

get editBtn(){
  return $('//XCUIElementTypeOther[contains(@name,"Beneficiary Details")]/following-sibling::XCUIElementTypeButton')
 //return $('//*[@type=XCUIElementTypeButton"][2]')
}

get editBeneficiaryScreen(){
  return $('~Edit Beneficiary')
}

get beneficiaryUpdatedMsg(){
return $('~Beneficiary Successfully Updated !')
}

get sendMoneyBtn(){
  //return $('~Send Money')
  return $('//XCUIElementTypeButton[@name="Send Money"]')
}

get amountField(){
  return $('(//XCUIElementTypeTextField[@name="Amount"])[1]')
}


/**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

async clickBneficiaryButton(){
  await this.beneficiaryBtn.click();
 }

 async verifyBeneficiaryScreen(){
  await (await this.addBeneficiaryBtn).waitForDisplayed({timeoput:30000});       
  return (await this.addBeneficiaryBtn).isDisplayed();       
}

async clickAddbenificiaryButton(){
  await this.addBeneficiaryBtn.click();
}

async verifyAddBeneficiaryScreenDisply(){
  (await this.addBeneficiaryScreen).waitForDisplayed();       
  return (await this.addBeneficiaryScreen).isDisplayed();       
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
  await this.inputMobileNo.click();
  await this.inputMobileNo.setValue("9876543210");
}

async enterAddress(){
  browser.hideKeyboard();
  await (await this.inputAddress).click();
  await this.inputAddress.setValue("Block A, street 4");
}

async enterZipcode(){
  browser.hideKeyboard();
  await (await this.inputZipcode).click();
  await this.inputZipcode.setValue("123456");
}

async selectIdentificationType(){
  browser.hideKeyboard();
  await (await this.idType).click();
  await (await this.selectPassoprtoption).click();
}

async clickSaveBtn(){
  await (await this.saveBtn).click();
}

async verifyBeneficiaryAdded(){ 
         await (await this.addBeneficiaryBtn).waitForDisplayed({timeout:30000});
          console.log(this.uniqueFirstName);
          return  await (await this.addedBeneficiary).isExisting();
      }

  async verifyBeneficiaryDetailsScreenDisply(){
    await (await this.beneficiaryDetailScreen).waitForDisplayed({timeout:30000})
    return await (await this.beneficiaryDetailScreen).isDisplayed();
  }

  async clickEditBeneficiaryBtn(){
    await (await this.editBtn).click();
  }

  async verifyEditBeneficiaryScreen(){
    if(await (await this.editBeneficiaryScreen).isDisplayed()){
      console.log("if block");
      return true;
    }
    else
    console.log("else block");
    await (await this.editBtn).click();
    await (await this.editBeneficiaryScreen).waitForDisplayed({timeout:30000})
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
    await (await this.inputMobileNo).click();
    await this.inputMobileNo.setValue(randomMobileNumber);
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

async clickSendMoneyBtn(){
  await (await this.sendMoneyBtn).click();
  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
   }
   console.log('Start');
    // Sleep for 2 seconds (2000 milliseconds)
    await sleep(10000);
    console.log('End');
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
}

export default new iosBeneficiaryPage();
