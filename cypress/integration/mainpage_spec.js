beforeEach(() => {
  cy.fetchAllMovies('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2');
  cy.visit('localhost:3000/');
});

describe('The Film Vault Main Page', () => {
  it('should be able to click all elements in Nav', () => {
    cy.get('button').eq(0).contains('Home').click();
    cy.get('img').eq(0).click();
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

  it('should be able to click on the back to top icon', () => {
    cy.get('img.back-to-top').click();
  });
});
