beforeEach(() => {
  cy.visit('localhost:3000/');
  cy.fetchAllMovies('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2');
});

describe('The Film Vault Search Feature', () => {
  it('should be able to search movies by title', () => {
    cy.get('input[name="searchInput"]')
      .type('Av')
      .get('h3')
      .eq(0)
      .contains('Ava');

    cy.get('input[name="searchInput"]')
      .clear('input')
      .type('mo')
      .get('h3')
      .eq(0)
      .contains('Money Plane');
  });
});
