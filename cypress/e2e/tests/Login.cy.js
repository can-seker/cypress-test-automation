import MainPage from "../pages/MainPage.js";

describe("Login Module", () => {
  const mainPage = new MainPage();

    it("TC0001 - Login User Control", () => {
        mainPage.visit()
        .fillEmail("john.smith@gmail.com")
        .fillPassword("john")
        .login()
        .loginUserControl();
    });

    it("TC0002 - Login Logout User Control", () => {
      mainPage.visit()
      .fillEmail("john.smith@gmail.com")
      .fillPassword("john")
      .login()
      .loginUserControl()
      .logout()
      .loginScreenVisibleControl();
  });
  
  it("TC0003 - Login Error User Control", () => {
    mainPage.visit()
    .fillEmail("john.smith@gmail.com")
    .fillPassword("john2")
    .login()
    .loginUserErrorControl();
});

});