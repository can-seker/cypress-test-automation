class MainPage {
  
    visit() {
      cy.visit("https://demo.borland.com/InsuranceWebExtJS/");
      return this;
    }
  
    fillEmail(value) {
      cy.get("[id='login-form:email']").type(value);
      return this;
    }
  
    fillPassword(value) {
      cy.get("[id='login-form:password']").type(value);
      return this;
    }
  
    login() {
      cy.get("[id='login-form:login']").click();
      return this;
    }

    signUp() {
      cy.get("[id='login-form:signup']").click();
      return this;
    }

    logout() {
      cy.get("[id='logout-form:logout']").click();
      return this;
    }

    loginScreenVisibleControl() {
      cy.get("[id='login-form:login']").should("be.visible");
      return this;
    }

    loginUserControl() {
      cy.get("[id='logout-form'] p").should("have.text", "Logged in as");
      return this;
    }

    loginUserErrorControl() {
      cy.get("[id='login-messages'] td").should("contain", "Could not log in user: Internal Error");
      return this;
    }
  }
  
  export default MainPage;