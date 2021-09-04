import React, { Component } from 'react';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';
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
    setTimeout(() => {
      fetchData('movies')
        .then((data) =>
          this.setState({ movies: data.movies, filteredMovies: data.movies })
        )
        .catch((err) => this.setState({ error: err }));
    }, 5000);
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
        {this.state.movies.length > 0 && (
          <SearchBar
            filterMovies={this.filterMovies}
            clearFilteredMovies={this.clearFilteredMovies}
          />
        )}
        {!this.state.movies.length && <Loading />}
        <FilmsContainer movies={this.state.filteredMovies} />
      </div>
    );
  }
}

export default MainContent;
