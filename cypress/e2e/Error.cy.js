describe("about page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://openlibrary.org/subjects/collectionid:bannedbooks.json?limit=100",
      { fixture: "books.json" }
    );
    cy.visit("http://localhost:3000/librarydfdfd");
  });

  it("should go to an error page if the library path is not found", () => {
    cy.visit("http://localhost:3000/librarydfdfd");
  });

  it("should display all elements on error page", () => {
    cy.get("h1").should("be.visible");
    cy.get("h2").should("be.visible");
    cy.get(".link").should("be.visible");
  });

  it("should go back to the home page if the link is clicked", () => {
    cy.get(".link").click();
    cy.url("http://localhost:3000");
  });
});
