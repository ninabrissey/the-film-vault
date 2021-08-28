import Nav from '../Nav/Nav';
import Movie from '../Movie/Movie';
import MainContent from '../MainContent/MainContent';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Nav />
      <MainContent />
      <footer>
        <h5>The Film Vault</h5>
      </footer>
      <Movie movieID={694919}/>
    </div>
  );
}

export default App;
