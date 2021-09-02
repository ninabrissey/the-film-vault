beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('The Film Vault Main Page', () => {
  it('should have an All Movies button', () => {
    cy.get('button').contains('All Movies');
  });

  it('should render the correct elements', () => {
    cy.get('img')
      .contains(
        'https://image.tmdb.org/t/p/original//k68nPLbIST6NP96JmTxmZijEvCA.jpg'
      )
      .get('h3')
      .contains('Tenet');
  });

  it('should be able to click a movie poster', () => {});

  it('should ', () => {});

  it('should ', () => {});

  it('should ', () => {});
});
