beforeEach(() => {
  cy.visit('http://localhost:3000/');
  cy.fetchAllMovies('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2');
});

describe('The Film Vault Seeach Feature', () => {
  it('should be able to search movies by title', () => {
    cy.get('input[name="searchInput"]');
  });
});
