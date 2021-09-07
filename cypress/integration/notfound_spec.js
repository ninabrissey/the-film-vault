describe('The Film Vault Not Found 404 Error Page', () => {
  it('should see a 404 page if the path is incorrect', () => {
    cy.visit('http://localhost:3000/film');

    cy.get('p').eq(0).contains('Oops...');
  });
});
