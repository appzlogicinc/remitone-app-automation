import { $ } from '@wdio/globals'

class iosBeneficiaryPage {

    /**
     * define selectors using getter methods
     */

get beneficiaryBtn(){
    const selector = `type == 'XCUIElementTypeImage' && name CONTAINS 'Beneficiary'`
    return $(`-ios predicate string:${selector}`)
}

get beneficiaryScreen(){
    return  $('//XCUIElementTypeTextField[@name="Search Beneficiary…"]');

}

get addBeneficiaryBtn(){
  return $('~HomeRouteAdd Beneficiary');
}

get inputFirstname (){
  const selector = `type == 'XCUIElementTypeTextField' && name CONTAINS 'First Name'`
    return $(`-ios predicate string:${selector}`)
}

get inputLasttname (){
  const selector = `type == 'XCUIElementTypeTextField' && name CONTAINS 'Last Name'`
    return $(`-ios predicate string:${selector}`)
}

get inputMobileNo (){
  const selector = `type == 'XCUIElementTypeTextField' && name CONTAINS 'Mobile Number'`
    return $(`-ios predicate string:${selector}`)
}

get inputAddress(){
  return $('//XCUIElementTypeTextField[@name="CreateBeneficiaryRoute, Address 1 Address 1 "]')
}

get inputZipcode(){
  return $('//XCUIElementTypeTextField[@name="CreateBeneficiaryRoute, Postcode / Zipcode Postcode / Zipcode *"]')
}

get idType(){
  return $('//XCUIElementTypeButton[@name="CreateBeneficiaryRoute, Identification Type Identification Type "]')
}

get selectPassoprtoption(){
  return $('//XCUIElementTypeStaticText[@name="PASSPORT"]')
}



/**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

async clickBneficiaryButton(){
  await this.beneficiaryBtn.click();
 }

 async verifyBeneficiaryScreen(){
  (await this.beneficiaryScreen).waitForDisplayed();       
  return (await this.beneficiaryScreen).isDisplayed();       

}

async clickAddbenificiaryButton(){
  this.addBeneficiaryBtn.click();
}

async enterBeneficiaryDetails(){
  (await this.inputFirstname).setValue("Abc");
  (await this.inputLasttname).setValue("Test");
  (await this.inputMobileNo).setValue("1234567890");
  (await this.inputAddress).setValue("123/A street 5");
  (await this.inputZipcode).setValue("123456");
  (await this.idType).click();
  (await this.selectPassoprtoption).click();
}



}
export default new iosBeneficiaryPage();
