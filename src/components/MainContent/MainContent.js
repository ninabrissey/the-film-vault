import React, { Component } from 'react';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import fetchData from '../../apiCalls';
import './MainContent.css';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetchData('movies').then((data) =>
      this.setState({ movies: [...this.state.movies, ...data.movies] })
    );
  }

  render() {
    return (
      <div>
        {this.props.showMovieDetails && 
          <FilmsContainer
            movies={this.state.movies}
            showMovieDetails={this.props.showMovieDetails}
          />}
      </div>
    );
  }
}

export default MainContent;

