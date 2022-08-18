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

    // Click on pay button
    // Search for user
    // Add amount and note and click pay
    // Return to transactions
    // Go to personal payments
    // Click on payment
    // Verify if payment was made
    // Verify if payment amount was deducted
  });
});
