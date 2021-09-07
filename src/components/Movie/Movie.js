import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import fetchData from '../../apiCalls';
import PropTypes from 'prop-types';

import './Movie.css';
import logo from '../../logo.png';

import dayjs from 'dayjs';
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
      isMovieDisplayed: true,
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
      release_date,
      backdrop_path,
      overview,
      genres,
      budget,
      runtime,
      tagline,
      revenue,
      average_rating,
    } = this.state.movie;

    return (
      <>
        <Nav isMovieDisplayed={this.isMovieDisplayed} />
        <section className="individual-movie-container">
          <div className="rating-container">
            <h2 className="individual-title">{title}</h2>
            <h3 className="individual-rating">
              {average_rating && Math.round(average_rating * 10) / 10}
            </h3>
          </div>
          <div className="media-container">
            <img
              className="individual-movie-poster"
              src={poster_path}
              alt={`${title} movie poster`}
            />
            <div className="trailer-container">
              <iframe
                className="trailer"
                title="Embedded YouTube Video"
                width="750"
                height="438.46"
                src={`https://www.youtube.com/embed/${this.state.video.key}`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
          <section className="details-wrapper">
            <p className="tagline">{tagline}</p>
            <div className="details-container">
              <h4>DETAILS </h4>
              <div>
                <p>
                  <span>Released </span>
                  {dayjs(release_date).format('MMMM D, YYYY')}
                </p>
                {genres !== undefined && (
                  <p>
                    <span>Genre </span>
                    {genres.join(', ')}
                  </p>
                )}
                {runtime > 0 && (
                  <p>
                    <span>Runtime </span>
                    {this.formatRuntime(runtime)}
                  </p>
                )}
                {budget > 0 && (
                  <p>
                    <span>Budget </span>
                    {formatter.format(budget)}
                  </p>
                )}
                {revenue > 0 && (
                  <p>
                    <span>Revenue </span>
                    {formatter.format(revenue)}
                  </p>
                )}
              </div>
            </div>
            <div className="overview-container">
              <h4>OVERVIEW </h4>
              <p className="overview">{overview}</p>
            </div>
          </section>
          <img
            className="individual-movie-image"
            src={backdrop_path}
            alt={`${title} movie poster`}
          />
        </section>
        <footer>
          <Link to="/">
            <img
              className="logo"
              src={logo}
              alt="the film vault logo and link to go to main page"
            />
          </Link>
        </footer>
      </>
    );
  }
}

Movie.propTypes = {
  movieID: PropTypes.string,
};

export default Movie;
