import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import Movie from '../Movie/Movie';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAllMoviesDisplayed: true,
      movieID: null,
    };
  }

  showMovieDetails = (id) => {
    this.setState({ isAllMoviesDisplayed: true, movieID: id });
  };

  showAllMovies = () => {
    this.setState({ isAllMoviesDisplayed: true });
  };

  formatRating = (rating) => {
    let formattedRating = rating.toFixed(1);
    return formattedRating;
  };

  render() {
    return (
      <div className="app">
        <Nav showAllMovies={this.showAllMovies} />
        {/* {this.state.isAllMoviesDisplayed && (
          <MainContent
            showAllMovies={this.showAllMovies}
            showMovieDetails={this.showMovieDetails}
            movieID={this.state.movieID}
            formatRating={this.formatRating}
          />  
        )} */}

        <Route exact path="/" render={() => ( <MainContent
            showAllMovies={this.showAllMovies}
            showMovieDetails={this.showMovieDetails}
            movieID={this.state.movieID}
            formatRating={this.formatRating}
          />  
        )} />

        {/* <Route exact path="/movies" render={() => { MainContent }} /> */}

        {/* {!this.state.isAllMoviesDisplayed && (
          <Movie
            movieID={this.state.movieID}
            formatRating={this.formatRating}
          />
        )} */}

        <Route exact path="/movies/:movieID" render={({ match }) => ( <Movie
            movieID={match.params.movieID}
            formatRating={this.formatRating}
          />
        )} />

        <footer>
          <h5>The Film Vault</h5>
        </footer>
      </div>
    );
  }
}

export default App;
