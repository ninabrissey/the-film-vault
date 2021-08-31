import React, { Component } from 'react';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import fetchData from '../../apiCalls';
import './MainContent.css';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount() {
    fetchData('movies')
      .then((data) =>
        this.setState({ movies: [...this.state.movies, ...data.movies] })
      )
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {!this.state.movies.length && (
          <p>This is where we'll put our loading page</p>
        )}
        {this.props.showMovieDetails && (
          <FilmsContainer
            movies={this.state.movies}
            showMovieDetails={this.props.showMovieDetails}
            formatRating={this.props.formatRating}
          />
        )}
      </div>
    );
  }
}

export default MainContent;
