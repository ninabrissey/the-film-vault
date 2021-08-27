import Nav from '../Nav/Nav';
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
    </div>
  );
}

export default App;
