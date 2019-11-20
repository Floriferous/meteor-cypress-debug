describe('test suite name', () => {
  before(() => {
    cy.visit('/');
  });

  it('clicks', () => {
    cy.contains('Click me').click()
    cy.contains('Click me').click()
  });
});
