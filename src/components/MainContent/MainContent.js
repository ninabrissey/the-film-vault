import React, { Component } from 'react';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import Movie from '../Movie/Movie';
import fetchData from '../../apiCalls';
import './MainContent.css';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isAllMoviesDisplayed: true,
      movieID: null,
    };
  }

  componentDidMount() {
    fetchData('movies').then((data) =>
      this.setState({ movies: [...this.state.movies, ...data.movies] })
    );
  }

  showMovieDetails = (id) => {
    this.setState({ isAllMoviesDisplayed: false, movieID: id });
  };

  render() {
    return (
      <div>
        {this.state.isAllMoviesDisplayed && (
          <FilmsContainer
            movies={this.state.movies}
            showMovieDetails={this.showMovieDetails}
          />
        )}
        {!this.state.isAllMoviesDisplayed && (
          <Movie movieID={this.state.movieID} />
        )}
      </div>
    );
  }
}

export default MainContent;

// create a handle click function to pass into our return FilmsContainer component
