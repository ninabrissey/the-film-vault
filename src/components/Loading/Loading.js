import loadingLogo from '../../loadingLogo.png';
import './Loading.css';

const Loading = () => {
  return (
    <div>
      <header className="Loading-header">
        <img src={loadingLogo} className="Loading-logo" alt="loading logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* for reference for styling purposes - look at index.css */}
      </header>
    </div>
  );
};

export default Loading;
