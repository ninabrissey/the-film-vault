describe('The Film Vault Movie Page', () => {
  it("should contain all of a movie's details that resolve to truthy", () => {
    cy.fetchMovie(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v1/movies/694919'
    );
    cy.visit('http://localhost:3000/movies/694919');
    cy.get('h2')
      .contains('Money Plane')
      .get('h3')
      .contains('6.1')
      .get(
        'img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]'
      )
      .should('have.attr', 'alt')
      .get('iframe[src="https://www.youtube.com/embed/aETz_dRDEys"]')
      .should('have.attr', 'title')
      .get('p')
      .eq(1)
      .contains('Sep 29, 2020')
      .get('p')
      .eq(2)
      .contains('Action')
      .get('p')
      .eq(3)
      .contains('1hr 22min')
      .get('p')
      .eq(4)
      .contains(
        "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
      );
  });
});
