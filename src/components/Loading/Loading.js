import loadingLogo from '../../loadingLogo.png';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingLogo} className="loading-logo" alt="loading logo" />
    </div>
  );
};

export default Loading;
