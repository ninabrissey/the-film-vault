import FilmCard from '../FilmCard/FilmCard';
import PropTypes from 'prop-types';
import './FilmsContainer.css';

const FilmsContainer = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return <FilmCard key={movie.id} movie={movie} />;
  });
  return <section className="films-container">{movieCards}</section>;
};

FilmsContainer.propTypes = {
  movies: PropTypes.array,
};

export default FilmsContainer;
