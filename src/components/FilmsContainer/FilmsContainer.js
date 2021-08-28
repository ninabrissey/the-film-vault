import FilmCard from '../FilmCard/FilmCard';
import './FilmsContainer.css';

const FilmsContainer = ({ movies, showMovieDetails }) => {
  const movieCards = movies.map((movie) => {
    return (
      <FilmCard
        key={movie.id}
        movie={movie}
        showMovieDetails={showMovieDetails}
      />
    );
  });
  return <section className="films-container">{movieCards}</section>;
};

export default FilmsContainer;

// function
// event target key === specific movie
// display the movie details
// and hide the films container

// pass that function into our films-container section onClick
