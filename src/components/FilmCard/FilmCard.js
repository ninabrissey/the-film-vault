import './FilmCard.css';

const FilmCard = ({ movie, showMovieDetails }) => {
  return (
    <article
      onClick={showMovieDetails(movie.id)}
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
        <p>{movie.release_date}</p>
        <h4>{movie.average_rating}</h4>
      </div>
    </article>
  );
};

export default FilmCard;
