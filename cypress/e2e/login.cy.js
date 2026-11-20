describe("Login tests", () => {
  it("should allow a user to login with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#exampleEmail").type("test@example.com");
    cy.get("#examplePassword").type("Test123!");
    cy.get("#terms").check();

    cy.contains("button", "Sign In")
      .should("not.be.disabled")
      .click();

    cy.contains("Giriş Başarılı!").should("be.visible");
  });

it("should show one error for invalid email", () => {
  cy.visit("http://localhost:5173/");

  cy.get("#exampleEmail").type("test");
  cy.get("#examplePassword").type("Test123!");

  cy.get(".invalid-feedback").should("have.length", 1);

  cy.contains("Lütfen geçerli bir email adresi girin.")
    .should("be.visible");

  cy.contains("button", "Sign In")
    .should("be.disabled");
});

  
  it("should show two errors for invalid email and password", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#exampleEmail").type("test");
    cy.get("#examplePassword").type("123");

    cy.get(".invalid-feedback").should("have.length", 2);

    cy.contains("Lütfen geçerli bir email adresi girin.")
      .should("be.visible");

    cy.contains("Şifre en az 8 karakter, büyük harf, küçük harf, rakam ve özel karakter içermelidir.")
      .should("be.visible");
  });

  it("should keep the button disabled when terms are not accepted", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#exampleEmail").type("test@example.com");
    cy.get("#examplePassword").type("Test123!");

    cy.get("#terms").should("not.be.checked");

    cy.contains("button", "Sign In")
      .should("be.disabled");
  });

});
