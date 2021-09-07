import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './FilmCard.css';
var dayjs = require('dayjs');

const FilmCard = ({ movie }) => {
  return (
    <article className="film-card" id={movie.id}>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={movie.poster_path}
          alt={`${movie.title} movie poster`}
          className="movie-poster"
        />
      </Link>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">
          {dayjs(movie.release_date).format('YYYY')}
        </p>
        <h4>{Math.round(movie.average_rating * 10) / 10}</h4>
      </div>
    </article>
  );
};

FilmCard.propTypes = {
  movie: PropTypes.object,
};

export default FilmCard;
