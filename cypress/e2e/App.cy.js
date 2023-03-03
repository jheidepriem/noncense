describe('about page', () => {
  beforeEach(() => {
    cy.intercept('')
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})