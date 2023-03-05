describe("about page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://openlibrary.org/subjects/collectionid:bannedbooks.json?limit=100",
      { fixture: "books.json" }
    );
    cy.visit("http://localhost:3000/library");
  });

  it("should show all elements on the library page", () => {
    cy.get(".logo").should("be.visible");
    cy.get("input").should("be.visible");
    cy.get(".books-container").should("be.visible");
    cy.get(":nth-child(1) > a > .book > .book-cover").should("be.visible");
    cy.get(":nth-child(2) > a > .book > .book-cover").should("be.visible");
  });

  it("should filter books on when text is typed into form", () => {
    cy.get("input").type("lolita").should("have.value", "lolita");
    cy.get(".book-cover").should("be.visible");
  });

  it("should go to book details page when book is clicked", () => {
    cy.get(":nth-child(2) > a > .book > .book-cover").click();
    cy.url("http://localhost:3000/library/").should(
      "include",
      "lolita0000unse_x3y3"
    );
    cy.get(".large-cover").should("be.visible");
  });
});
