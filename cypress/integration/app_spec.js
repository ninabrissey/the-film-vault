beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('The Film Vault App', () => {
  it('should be able to visit page', () => {
    cy.get('button').contains('All Movies');
  });
});
