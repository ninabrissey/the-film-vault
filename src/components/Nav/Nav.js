import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <header>
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
    </header>
  );
};

export default Nav;
