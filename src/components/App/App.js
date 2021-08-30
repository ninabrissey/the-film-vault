import React, {Component} from 'react';
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
    }
  }

  showMovieDetails = (id) => {
    this.setState({ isAllMoviesDisplayed: false, movieID: id  });
  }

  showAllMovies = () => {
    this.setState({ isAllMoviesDisplayed: true });
  }

  render() {
    return (
      <div className="app">
        <Nav 
          showAllMovies={this.showAllMovies}
        /> 
        {this.state.isAllMoviesDisplayed && <MainContent 
          showAllMovies={this.showAllMovies}
          showMovieDetails={this.showMovieDetails}
          movieID={this.state.movieID}
        />}
        {!this.state.isAllMoviesDisplayed && <Movie movieID={this.state.movieID} />}
        <footer>
          <h5>The Film Vault</h5>
        </footer>
      </div>
    );
  }
}

export default App;
