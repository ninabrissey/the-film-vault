import './FilmCard.css';

const FilmCard = ({ movie }) => {
  return (
    <article id={movie.id}>
      <img src={movie.poster_path} />
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <h4>{movie.average_rating}</h4>
      </div>
    </article>
  );
};

export default FilmCard;
