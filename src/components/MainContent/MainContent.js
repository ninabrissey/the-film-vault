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
    };
  }

  componentDidMount() {
    fetchData('movies').then((data) =>
      this.setState({ movies: [...this.state.movies, ...data.movies] })
    );
  }

  showMovieDetails = () => {
    this.setState({ isAllMoviesDisplayed: false });
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
        {!this.state.isAllMoviesDisplayed && <Movie movieID={577922} />}
      </div>
    );
  }
}

export default MainContent;

// we want to handle our click event here on our film container to render correct page
// movie details page

// create a handle click function to pass into our return FilmsContainer component
// handle click function will update state ...what do we want to call that property? to enable the function being passed into other component
