beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('The Film Vault Main Page', () => {
  it('should be able to click all elements in Nav', () => {
    cy.get('button').contains('All Movies');
    cy.get('header>a>img').click();
  });

  it('should render the correct elements', () => {
    cy.get('h3').contains('Money Plane').get('p').contains('2020');
  });

  it('should be able to click a movie poster', () => {
    cy.get('article>a').eq(0).click();
    // .contains('http://localhost:3000/movies/694919');
  });

  it('should ', () => {});

  it('should ', () => {});

  it('should ', () => {});
});
