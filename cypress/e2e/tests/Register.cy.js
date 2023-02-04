import MainPage from "../pages/MainPage.js";
import SignUpPage from "../pages/SignUpPage.js";
import BaseLib from "../base/BaseLib";

describe("Register Module", () => {
  const baseLib = new BaseLib();
  const mainPage = new MainPage();
  const signUpPage = new SignUpPage();

    it("TC0004 - Register User", () => {
        mainPage.visit()
        .signUp();

        signUpPage.fillFirstName("Test")
        .fillLastName("QA")
        .fillBirthDay("15/09/1998")
        .fillEmailAddress("test" + baseLib.randomNumber() + "@qatest.com")
        .fillMailingAddress("test@qatest.com")
        .fillCity("New York")
        .selectState("AL")
        .fillPostalCode("34000")
        .fillPassword("TestQA123")
        .signUp()
        .signUpMessageControl();
    });

});