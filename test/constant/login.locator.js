const ignore = "IGNORE";
const loginBtn = 'new UiSelector().description("Existing User? Login")';
const inputUsername = 'new UiSelector().textContains("Email Address ")';
const inputPassword = 'new UiSelector().textContains("Password ")';
const btnSubmit = 'new UiSelector().description("Login")';
const moreBtn = 'new UiSelector().descriptionContains("More")';
const logoutBtn = 'new UiSelector().description("Log Out")';
const okBtn = 'new UiSelector().description("OK")';
module.exports = {
  loginBtn,
  inputPassword,
  inputUsername,
  btnSubmit,
  moreBtn,
  logoutBtn,
  okBtn,
};
