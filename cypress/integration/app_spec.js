beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('The Film Vault Main Page', () => {
  it('should have an All Movies button', () => {
    cy.get('button').contains('All Movies');
  });

  it('should render the correct elements', () => {
    cy.get('h3').contains('Tenet');
  });

  it('should be able to click a movie poster', () => {
    cy.get('article>a').eq(0).click();
    // .contains('http://localhost:3000/movies/694919');
  });

  it('should ', () => {});

  it('should ', () => {});

  it('should ', () => {});
});
