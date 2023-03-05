describe("about page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://openlibrary.org/subjects/collectionid:bannedbooks.json?limit=100",
      { fixture: "books.json" }
    );
    cy.visit("http://localhost:3000/librarydfdfd");
  });

  it("should display all elements on error page", () => {
    cy.get("h1").should("be.visible").contains("404 Error");
    cy.get("h2").should("be.visible").contains("Page Not Found");
    cy.get(".link").should("be.visible").contains("Go Home");
  });

  it("should go back to the home page if the link is clicked", () => {
    cy.get(".link").click();
    cy.url("http://localhost:3000");
  });
});
