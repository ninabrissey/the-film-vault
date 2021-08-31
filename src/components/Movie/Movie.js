import React, { Component } from 'react';
import fetchData from '../../apiCalls';
import './Movie.css';
var dayjs = require('dayjs');
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

class Movie extends Component {
  constructor(props) {
    super(props);
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

  formatRuntime = (runtime) => {
    if (runtime < 59) {
      return `${runtime}min`;
    }
    if (runtime > 59 && runtime < 119) {
      return `1hr ${runtime - 60}min`;
    }
    if (runtime > 119) {
      return `2hr ${runtime - 120}min`;
    }
  };

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
      revenue,
      average_rating,
    } = this.state.movie;

    // const joinedGenres = genres.join(', ');
    // console.log(typeof genres, genres, 'genres');

    return (
      <section className="movie-details">
        <div className="details1-container">
          <h2>{title}</h2>
          <h3>{average_rating && this.props.formatRating(average_rating)}</h3>
        </div>
        <div className="details2-container">
          <img
            className="movie-poster"
            src={poster_path}
            alt={`${title} movie poster`}
          />
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
          <p>{tagline}</p>
          <p>Overview: {overview}</p>
          <p>Release Date: {dayjs(release_date).format('MMMM D, YYYY')}</p>
          {genres !== undefined && <p>Genres: {genres.join(', ')}</p>}
          {runtime > 0 && <p>Runtime: {this.formatRuntime(runtime)}</p>}
          {budget > 0 && <p>Budget: {budget}</p>}
          {revenue > 0 && <p>Revenue: {formatter.format(revenue)}</p>}
        </div>
      </section>
    );
  }
}

export default Movie;
