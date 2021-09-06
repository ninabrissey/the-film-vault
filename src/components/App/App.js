import { Route, Link, Switch } from 'react-router-dom';
// import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import Movie from '../Movie/Movie';
// import logo from '../../logo.png';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" render={() => <MainContent />} />
        <Route exact path="/search" render={() => <MainContent />} />
        <Route
          exact
          path="/movies/:movieID"
          render={({ match }) => <Movie movieID={match.params.movieID} />}
        />
        <Route render={() => <p>page not found</p>}/>
      </Switch>  
      {/* <footer>
        <Link to="/" onClick={() => {window.location.reload()}}>
          <img
            className="logo"
            src={logo}
            alt="the film vault logo and link to go to main page"
          />
        </Link>
      </footer> */}
    </div>
  );
};

export default App;
