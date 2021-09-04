import loadingLogo from '../../loadingLogo.png';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingLogo} className="loading-logo" alt="loading logo" />
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* for reference for styling purposes - look at index.css */}
    </div>
  );
};

export default Loading;
