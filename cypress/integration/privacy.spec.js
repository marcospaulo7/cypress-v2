Cypress._.times(5, () =>
  it("testa a página da política de privacidade de forma independente", function () {
    cy.visit("./src/privacy.html");
  })
);


