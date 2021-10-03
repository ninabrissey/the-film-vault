import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './FilmCard.css';
import dayjs from 'dayjs';

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
        <div className="movie-title-wrapper">
          <h3 className="movie-title">{movie.title}</h3>
        </div>
        <div className="movie-rating-date-container">
          <h4 className="movie-rating">
            {Math.round(movie.average_rating * 10) / 10}
          </h4>
          <p className="movie-release-date">
            {dayjs(movie.release_date).format('YYYY')}
          </p>
        </div>
      </div>
    </article>
  );
};

FilmCard.propTypes = {
  movie: PropTypes.object,
};

export default FilmCard;
