beforeEach(() => {
  cy.visit('http://localhost:3000/');
  cy.fetchAllMovies('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2');
});

describe('The Film Vault Main Page', () => {
  it('should be able to click all elements in Nav', () => {
    cy.get('button').contains('HOME');
    cy.get('header>a>img').click();
  });

  it('should render the correct elements', () => {
    cy.get('h3')
      .contains('Money Plane')
      .get('p')
      .contains('2020')
      .get('h4')
      .contains('6.1');
  });

  it('should be able to click a movie poster', () => {
    cy.get('article>a').eq(0).click();
  });

  it('should be able to click the logo in the footer', () => {
    cy.get('footer>a').click();
  });
});
