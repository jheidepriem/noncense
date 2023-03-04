describe("about page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://openlibrary.org/subjects/collectionid:bannedbooks.json?limit=100",
      { fixture: "books.json" }
    );
    cy.visit("http://localhost:3000/library");
    cy.get(":nth-child(2) > a > .book > .book-cover").click();
  });

  it("should display all book details on page", () => {
    cy.get(".logo").should("be.visible");
    cy.get(".large-cover").should("be.visible");
    cy.get(".book-title").should("be.visible");
    cy.get(".book-details > :nth-child(2)").should("be.visible");
    cy.get(".button-2").should("be.visible");
    cy.get(".book-details > :nth-child(5)").should("be.visible");
  });

  it("should be able to click on Checkout Book text and be taken to an external link", () => {
    cy.get(".button-2").click();
    cy.url("http://openlibrary.org/works/OL627084W/Lolita");
    cy.get(".books-container").should("be.visible");
    cy.get(":nth-child(1) > a > .book > .book-cover").should("be.visible");
    cy.get(":nth-child(2) > a > .book > .book-cover").should("be.visible");
  });
});
