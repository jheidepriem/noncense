describe("about page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://openlibrary.org/subjects/collectionid:bannedbooks.json?limit=100",
      { fixture: "books.json" }
    );
    cy.visit("http://localhost:3000/book/lolita0000unse_x3y3");
  })

  it('should display all book details on page', () => {
    cy.get('.logo').should('be.visible')
    cy.get('.large-cover').should('be.visible').should('be.visible')
    cy.get('.book-title').should('be.visible').should('be.visible')
    cy.get('.book-details > :nth-child(2)').should('be.visible')
    cy.get('.button-2').should('be.visible')
    cy.get('.book-details > :nth-child(5)').should('be.visible')
  })

  
})