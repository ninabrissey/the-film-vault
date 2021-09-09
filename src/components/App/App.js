import { Route, Switch } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={() => <MainContent onLoad={window.scrollTo(0, 0)}/>} />
        <Route
          exact
          path="/movies/:movieID"
          render={({ match }) => <Movie 
            movieID={match.params.movieID} 
            onLoad={window.scrollTo(0, 0)}
          />}
        />
        <Route render={() => <NotFound />}/>
      </Switch>  
    </div>
  );
};

export default App;
