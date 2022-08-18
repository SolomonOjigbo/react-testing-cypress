const { v4: uuidv4 } = require("uuid");
describe("payment", () => {
  it("user can make payment", () => {
    // Login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // Check account balance
    let currentBalance;
    cy.get("[data-test=sidenav-user-balance]")
      .then(($balance) => (currentBalance = $balance.text()))
      .then((balance) => console.log(balance));

    // Click on New button
    cy.findByRole("button", { name: /new/i }).click();

    // Search and select user
    cy.findByRole("textbox").type("devon becker");
    cy.findByText(/devon becker/i).click();

    // Add amount and note and click pay
    cy.findByPlaceholderText(/Amount/i).type("5");

    const note = uuidv4();
    cy.findByPlaceholderText(/Add a note/i).type(note);
    cy.findByRole("button", { name: /pay/i }).click();

    // Return to transactions
    cy.findByRole("button", { name: /return to transactions/i }).click();

    // Go to personal payments
    // Click on payment
    // Verify if payment was made
    // Verify if payment amount was deducted
  });
});
