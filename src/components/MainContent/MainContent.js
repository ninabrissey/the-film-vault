import React, { Component } from 'react';
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
    fetchData('movies').then((data) => this.setState({ movies: data }));
  }

  render() {
    console.log(fetchData('movies'));
    return <h1>Main Content</h1>;
  }
}

export default MainContent;
