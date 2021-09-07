import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import partyTitle from '../../party-title.png'
import './Nav.css';

const Nav = ({movieObj}) => {

  return (
    <header>
      <div className='image-overlay'/>
      {movieObj && <img className='header-image' src={movieObj.backdrop_path} alt={`${movieObj.title} backdrop`} />}
      <img className='party-title' src={partyTitle} alt='the good, the bad and the mediocre header' />
        <div className='nav-navigation'>
          <Link to="/">
            <img
              // onClick={() => {window.location.reload()}}
              className="logo"
              src={logo}
              alt="the film vault logo and link to go to main page"
            />
          </Link>
          <NavLink to="/">
            <button 
            // onClick={() => {window.location.reload()}}
            className="all-movies-btn">Home</button>
          </NavLink>
        </div>
    </header>
  );
};

export default Nav;