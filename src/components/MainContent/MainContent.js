import React, { Component } from 'react';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import SearchBar from '../SearchBar/SearchBar';
import fetchData from '../../apiCalls';
import './MainContent.css';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      error: '',
    };
  }

  componentDidMount() {
    fetchData('movies')
      .then((data) =>
        this.setState({ movies: data.movies, filteredMovies: data.movies })
      )
      .catch((err) => this.setState({ error: err }));
  }

  filterMovies = (searchInput) => {
    const matchedMovies = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput)
    );
    this.setState({ filteredMovies: matchedMovies });
  };

  clearFilteredMovies = () => {
    this.setState({ filteredMovies: [] });
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {!this.state.movies.length && this.state.filteredMovies.length > 0 && (
          <p>This is where we'll put our loading page</p>
        )}
        <SearchBar
          filterMovies={this.filterMovies}
          clearFilteredMovies={this.clearFilteredMovies}
        />
        <FilmsContainer movies={this.state.filteredMovies} />
      </div>
    );
  }
}

export default MainContent;
