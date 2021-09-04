import loadingLogo from '../../loadingLogo.png';
import './Loading.css';

const Loading = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loadingLogo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* for reference for styling purposes - look at index.css */}
      </header>
    </div>
  );
};

export default Loading;
