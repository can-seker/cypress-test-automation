class SignUpPage{
  
    fillFirstName(value) {
      cy.get("[id='signup:fname']").type(value);
      return this;
    }
  
    fillLastName(value) {
      cy.get("[id='signup:lname']").type(value);
      return this;
    }
  
    fillBirthDay(value) {
      cy.get("[id='BirthDate']").type(value);
      return this;
    }

    fillEmailAddress(value) {
      cy.get("[id='signup:email']").type(value);
      return this;
    }

    fillMailingAddress(value) {
      cy.get("[id='signup:street']").type(value);
      return this;
    }

    fillCity(value) {
      cy.get("[id='signup:city']").type(value);
      return this;
    }

    selectState(value) {
      cy.get("[id='signup:state']").select(value)
      return this;
    }

    fillPostalCode(value) {
      cy.get("[id='signup:zip']").type(value);
      return this;
    }

    fillPassword(value) {
      cy.get("[id='signup:password']").type(value);
      return this;
    }

    signUp() {
      cy.get("[id='signup:signup']").click();
      return this;
    }

    signUpMessageControl() {
      cy.get("[id='content-main'] h1").should("have.text", "Thank you for signup!");
      return this;
    }
  }
  
  export default SignUpPage;