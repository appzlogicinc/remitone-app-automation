const beneficiaryBtn = 'new UiSelector().descriptionContains("Beneficiary")';
const addBeneficiaryBtn = 'new UiSelector().description("Add Beneficiary")';
const inputFirstname = 'new UiSelector().textContains("First Name")';
const inputLastname = 'new UiSelector().textContains("Last Name *")';
const inputMobileno = 'new UiSelector().textContains("Mobile Number")';
const enterAddress = 'new UiSelector().textContains("Address 1")';
const enterCity = 'new UiSelector().textContains("City")';
const enterState = 'new UiSelector().textContains("State")';
const enterPostcode = 'new UiSelector().textContains("Postcode / Zipcode")';
const idType = 'new UiSelector().descriptionContains("Identification Type")';
const passport = 'new UiSelector().descriptionContains("CHEQUEBOOK")';
const saveBbutton = 'new UiSelector().description("Save")';
module.exports = {
  addBeneficiaryBtn,
  beneficiaryBtn,
  inputFirstname,
  checkLocatorExist,
  inputFirstname,
  idType,
  passport,
  saveBbutton,
  enterPostcode,
  enterCity,
  enterState,
  enterAddress,
  inputLastname,
  inputMobileno,
};
