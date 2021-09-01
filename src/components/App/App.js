import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import Movie from '../Movie/Movie';
import logo from '../../logo.png';
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
        <Route exact path="/" render={() => ( <MainContent
            showAllMovies={this.showAllMovies}
            showMovieDetails={this.showMovieDetails}
            movieID={this.state.movieID}
            formatRating={this.formatRating}
          />  
        )} />
        <Route exact path="/movies/:movieID" render={({ match }) => ( <Movie
            movieID={match.params.movieID}
            formatRating={this.formatRating}
          />
        )} />
        <footer>
          <Link to='/'>
            <img 
            className='logo' 
            src={logo} 
            alt='the film vault logo and link to go to main page'
            onClick={() => this.showAllMovies()}
          />
          </Link>
        </footer>
      </div>
    );
  }
}

export default App;
