import { Route, Switch } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound'
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
        <Route render={() => <NotFound />}/>
      </Switch>  
    </div>
  );
};

export default App;
