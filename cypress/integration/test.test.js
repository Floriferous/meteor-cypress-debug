describe('test suite name', () => {
  before(() => {
    cy.visit('/');
  });

  it('clicks', () => {
    cy.contains('Click Me').click()
    cy.contains('Click Me').click()

    cy.contains('2 times').should('exist')
  });
});
