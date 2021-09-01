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
          alt="movie poster"
          className="movie-poster"
        />
      </Link>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{dayjs(movie.release_date).format('YYYY')}</p>
        {/* <h4>{formatRating(movie.average_rating)}</h4> */}
      </div>
    </article>
  );
};

FilmCard.propTypes = {
  movie: PropTypes.object,
};

export default FilmCard;
