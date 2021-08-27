import FilmCard from '../FilmCard/FilmCard';
import './FilmsContainer.css';

const FilmsContainer = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return <FilmCard key={movie.id} movie={movie} />
  });
  return <section className='films-container'>{movieCards}</section>;
};

export default FilmsContainer;
