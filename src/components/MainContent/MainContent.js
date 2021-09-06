import React, { Component } from 'react';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';
import fetchData from '../../apiCalls';
// import partyTitle from '../../party-title.png'
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
    if (!this.state.movies.length) {
      fetchData('movies')
        .then((data) =>
          this.setState({ movies: data.movies, filteredMovies: data.movies })
        )
        .catch((err) => this.setState({ error: err }));
    }
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
      <main>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.movies.length > 0 && (
          <SearchBar
            filterMovies={this.filterMovies}
            clearFilteredMovies={this.clearFilteredMovies}
          />
        )}
        {!this.state.movies.length && <Loading />}
        <FilmsContainer movies={this.state.filteredMovies} />
      </main>
    );
  }
}

export default MainContent;
