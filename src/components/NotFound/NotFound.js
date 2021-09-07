import './NotFound.css';
import loadingLogo from '../../loadingLogo.png';
const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-text'>
        <p>Oops...</p>
        <p>Seems we cannot find the page you requested</p>
      </div>
      <p className='not-found-stat'>404</p>
      <img className='not-found-logo' src={loadingLogo} alt='the film vault logo' />
    </div>
  )
}

export default NotFound;