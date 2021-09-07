import { Link } from 'react-router-dom'
import './NotFound.css';
import notFoundLogo from '../../notFoundLogo.png';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-text'>
        <p>Oops...</p>
        <p>Seems we cannot find the page you requested</p>
      </div>
      <img className='not-found-logo' src={notFoundLogo} alt='the film vault logo' />
      <p 
      className='return-home'>Click 
      <Link to='/'>HERE</Link> 
      to go back to the Film Vault
      </p>
    </div>
  )
}

export default NotFound;