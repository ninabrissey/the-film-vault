import './FilmCard.css';
var dayjs = require('dayjs');

const FilmCard = ({ movie, showMovieDetails, formatRating }) => {
  return (
    <article
      onClick={() => showMovieDetails(movie.id)}
      className="film-card"
      id={movie.id}
    >
      <img
        src={movie.poster_path}
        alt="movie poster"
        className="movie-poster"
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{dayjs(movie.release_date).format('YYYY')}</p>
        <h4>{formatRating(movie.average_rating)}</h4>
      </div>
    </article>
  );
};

export default FilmCard;
