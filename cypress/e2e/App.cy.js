describe("about page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://openlibrary.org/subjects/collectionid:bannedbooks.json?limit=100",
      { fixture: "books.json" }
    );
    cy.visit("http://localhost:3000");
  });

  it("should show all of the elements on the main about page", () => {
    cy.get(".welcome-title").should("be.visible");
    cy.get(".about-text").should("be.visible");
    cy.get(".map-image").should("be.visible");
    cy.get(".about-text-2").should("be.visible");
    cy.get(".button").should("be.visible");
  });

  it("should navigate to the library on button click", () => {
    cy.get("button").click();
    cy.url("http://localhost:3000/library");
    cy.get(".logo").should("be.visible");
    cy.get("input").should("be.visible");
    cy.get(".books-container").should("be.visible");
    cy.get(":nth-child(1) > a > .book > .book-cover").should("be.visible");
    cy.get(":nth-child(2) > a > .book > .book-cover").should("be.visible");
  });
});
