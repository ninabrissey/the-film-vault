import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import Movie from '../Movie/Movie';
import logo from '../../logo.png';
import './App.css';


function App() {
  return (
    <div className="app">
      <Nav />
      <Route exact path="/" render={() => ( <MainContent/> )} />
      <Route exact path="/movies/:movieID" render={({ match }) => ( <Movie
          movieID={match.params.movieID}
        />
      )} />
      <footer>
        <Link to='/'>
          <img 
          className='logo' 
          src={logo} 
          alt='the film vault logo and link to go to main page'
        />
        </Link>
      </footer>
    </div>
  );
}


export default App;
