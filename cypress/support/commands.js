// Fetch stub to retrieve all movies //
Cypress.Commands.add('fetchAllMovies', (method, baseURL) => {
  cy.intercept(`${method}`, `${baseURL}/movies`, {
    body: {
      movies: [
        {
          id: 694919,
          poster_path:
            'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
          backdrop_path:
            'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
          title: 'Money Plane',
          average_rating: 6.142857142857143,
          release_date: '2020-09-29',
        },
        {
          id: 539885,
          poster_path:
            'https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
          backdrop_path:
            'https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg',
          title: 'Ava',
          average_rating: 5.142857142857143,
          release_date: '2020-07-02',
        },
      ],
    },
  });
});

// Fetch stub to retrieve a single movies details //
Cypress.Commands.add('fetchMovie', (method, baseURL) => {
  cy.intercept(`${method}`, `${baseURL}/movies/694919`, {
    body: {
      movie: {
        id: 694919,
        title: 'Money Plane',
        poster_path:
          'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
        backdrop_path:
          'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
        release_date: '2020-09-29',
        overview:
          "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        genres: ['Action'],
        budget: 0,
        revenue: 0,
        runtime: 82,
        tagline: '',
        average_rating: 6.142857142857143,
      },
    },
  });
});
