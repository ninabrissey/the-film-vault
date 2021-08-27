import React, {Component} from 'react';
import fetchData from '../../apiCalls';
import './Movie.css';

class Movie extends Component {
  constructor() {
    super()
    this.state = {
      movie: {}
      video: ''
    }
    // console.log(this.state.movie)
  }
  
  componentDidMount() {
    // console.log('butts', this.props.movieID)
    fetchData(`movies/${this.props.movieID}`).then((data) =>
      this.setState({ movie: data.movie })
    );

    fetchData(`movies/${this.props.movieID}/videos`).then((data) =>
    this.setState({ video: data })
  );
  }


  render() {
    const { title, poster_path, backdrop_path, release_date, overview, genres, budget, runtime, tagline, average_rating } = this.state.movie

    return (
      <section>
        <h2>{title}</h2>
        <h3>{average_rating}</h3>
        <img src={poster_path} alt={`${title} movie poster`} />
        <>
      </section>
    )
  }  
}


export default Movie;