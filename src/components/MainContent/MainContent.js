import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';
import fetchData from '../../apiCalls';
import './MainContent.css';
import logo from '../../logo.png';
import backToTopIcon from '../../backToTopIcon.png';

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
    this.setState({ filteredMovies: this.state.movies });
  };

  getRandomHeaderImage = () => {
    if (this.state.movies) {
      const randomIndex = Math.floor(Math.random() * this.state.movies.length);
      const randomMovie = this.state.movies[randomIndex];
      return randomMovie;
    }
  };

  render() {
    return (
      <>
        <Nav movieObj={this.getRandomHeaderImage()} />
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
          <Link
            className="link-back-to-top"
            to="/"
            onClick={() => {
              window.location.reload();
              window.scrollTo(0, 0);
            }}
          >
            <img
              className="back-to-top"
              src={backToTopIcon}
              alt="back to top of page icon"
            />
          </Link>
        </main>
        <footer>
          <Link
            to="/"
            onClick={() => {
              window.location.reload();
              window.scrollTo(0, 0);
            }}
          >
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

export default MainContent;
