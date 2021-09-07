import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import partyTitle from '../../party-title.png'
import './Nav.css';

const Nav = ({movieObj}) => {
  return (
    <>
      {movieObj && <header className='all-movies-header'>
        <div className='image-overlay'/>
        <img className='header-image' src={movieObj.backdrop_path} alt={`${movieObj.title} backdrop`} />
        <img className='party-title' src={partyTitle} alt='the good, the bad and the mediocre header' />
      </header>}

      <div className='nav-navigation'>
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="the film vault logo and link to go to main page"
          />
        </Link>
        {movieObj && <button onClick={() => {window.location.reload()}} className="all-movies-btn">Home</button>}
        {!movieObj && <NavLink to="/">
          <button 
            className="all-movies-btn">Home</button>
        </NavLink>}
      </div>
    </>
  );
};

export default Nav;