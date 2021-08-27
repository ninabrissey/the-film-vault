import FilmCard from '../FilmCard/FilmCard';
import './FilmsContainer.css';

const FilmsContainer = (props) => {
  const movieCards = props.movies.map((movie) => {
    return <FilmCard key={movie.id} movie={movie} />;
  });
  return <section>{movieCards}</section>;
};

export default FilmsContainer;
