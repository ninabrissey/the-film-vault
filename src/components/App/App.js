import { Route, Switch } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import Movie from '../Movie/Movie';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={() => <MainContent />} />
        {/* <Route exact path="/search" render={() => <MainContent />} /> */}
        <Route
          exact
          path="/movies/:movieID"
          render={({ match }) => <Movie movieID={match.params.movieID} />}
        />
        <Route render={() => <p>page not found</p>}/>
      </Switch>  
      {/* need to make 404 page component */}
    </div>
  );
};

export default App;
