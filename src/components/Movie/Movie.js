import React, { Component } from 'react';
import fetchData from '../../apiCalls';
import './Movie.css';

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      video: {},
    };
  }

  componentDidMount() {
    return Promise.all([
      fetchData(`movies/${this.props.movieID}`),
      fetchData(`movies/${this.props.movieID}/videos`),
    ]).then((data) => {
      this.setState({ movie: data[0].movie, video: data[1].videos[0] });
    });
  }

  render() {
    const {
      title,
      poster_path,
      backdrop_path,
      release_date,
      overview,
      genres,
      budget,
      runtime,
      tagline,
      average_rating,
    } = this.state.movie;

    return (
      <section className="movie-details">
        <div className="details1-container">
          <h2>{title}</h2>
          <h3>{average_rating}</h3>
        </div>
        <div className="details2-container">
          <img className="movie-poster" src={poster_path} alt={`${title} movie poster`} />
          <iframe
            title="Embedded YouTube Video"
            width="650"
            height="380"
            src={`https://www.youtube.com/embed/${this.state.video.key}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="details3-container">
          <p>Tagline: {tagline}</p>
          <p>Overview: {overview}</p>
          <p>Realease Date:{release_date}</p>
          {/* {genres.length > 1 && genres.map((genre) => <p>{genre}</p>)}
          {genres.length === 1 && <p>{genres[0]}</p>} */}
          <p>Genres: {genres}</p>
          <p>Runtime: {runtime}</p>
          <p>Budget: {budget}</p>
        </div>
      </section>
    );
  }
}

export default Movie;
