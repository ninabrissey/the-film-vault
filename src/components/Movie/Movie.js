import React, { Component } from 'react';
import fetchData from '../../apiCalls';
import './Movie.css';
const formatter = new Intl.NumberFormat('en-US', {
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
    console.log(this.props.formatRating, 'props');
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

    console.log(typeof budget, 'budget');

    return (
      <section className="movie-details">
        <div className="details1-container">
          <h2>{title}</h2>
          <h3>
            {typeof runtime === 'number' &&
              this.props.formatRating(average_rating)}
          </h3>
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
          <p>Tagline: {tagline}</p>
          <p>Overview: {overview}</p>
          <p>Release Date:{release_date}</p>
          {/* {genres.length > 1 && genres.map((genre) => <p>{genre}</p>)}
          {genres.length === 1 && <p>{genres[0]}</p>} */}
          {genres && <p>Genres: {genres}</p>}
          {runtime !== 0 && <p>Runtime: {this.formatRuntime(runtime)}</p>}
          {budget !== 0 && <p>Budget: {budget}</p>}
          {revenue !== 0 && <p>Revenue: {formatter.format(revenue)}</p>}
        </div>
      </section>
    );
  }
}

export default Movie;
