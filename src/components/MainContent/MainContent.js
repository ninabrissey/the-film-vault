import React, { Component } from 'react';
import FilmsContainer from '../FilmsContainer/FilmsContainer';
import fetchData from '../../apiCalls';
import './MainContent.css';

class MainContent extends Component {
  constructor() {
    super();
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
    return <FilmsContainer movies={this.state.movies} />;
  }
}

export default MainContent;
