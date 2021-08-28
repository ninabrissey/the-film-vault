import React, {Component} from 'react';
import fetchData from '../../apiCalls';
import './Movie.css';

class Movie extends Component {
  constructor() {
    super()
    this.state = {
      movie: {},
      video: {}
    }

  }
  
  componentDidMount() {
    return Promise.all([
      fetchData(`movies/${this.props.movieID}`), 
      fetchData(`movies/${this.props.movieID}/videos`)
    ])
      .then(data => {this.setState({ movie: data[0].movie, video: data[1].videos[0] })})
  }




  render() {
    const { title, poster_path, backdrop_path, release_date, overview, genres, budget, runtime, tagline, average_rating } = this.state.movie

        console.log('movie', this.state.movie)
        console.log('videos', this.state.video.key)

    return (
      <section>
        <h2>{title}</h2>
        <h3>{average_rating}</h3>
        <img src={poster_path} alt={`${title} movie poster`} />
        <div>
          <iframe
            title='Embedded YouTube Video'
            width='650'
            height='380'
            src={`https://www.youtube.com/embed/${this.state.video.key}`}
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </section>
    )
  }  
}


export default Movie;