import './Nav.css';
import logo from '../../logo.png';
import partyTitle from '../../party-title.png'

import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <div className='image-overlay'></div>
      <img className='header-image' src='https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg' alt='ava backdrop' />
      <div className='nav-navigation'>
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="the film vault logo and link to go to main page"
          />
        </Link>
        <NavLink to="/">
          <button className="all-movies-btn">All Movies</button>
        </NavLink>
      </div>
      <img className='party-title' src={partyTitle} alt='party title' />
    </header>
  );
};

export default Nav;
