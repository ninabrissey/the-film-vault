describe('The Film Vault Not Found 404 Error Page', () => {
  it('should see a 404 page if the path is incorrect', () => {
    cy.visit('http://localhost:3000/film');

    cy.get('p')
      .eq(0)
      .contains('Oops...')
      .get('p')
      .eq(1)
      .contains('Seems we cannot find the page you requested')
      .get('img')
      .should('have.class', 'not-found-logo')
      .get('p')
      .eq(2)
      .contains('Click')
      .get('a')
      .contains(' here ')
      .click()
      .get('h3')
      .contains('Money Plane');
  });
});
