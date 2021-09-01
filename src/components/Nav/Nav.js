import './Nav.css';
import logo from '../../logo.png';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <h1>
        <Link to='/'>
          <img 
          className='logo' 
          src={logo} 
          alt='the film vault logo and link to go to main page'
        />
        </Link>
      </h1>
      <NavLink to='/'>
        <button className='all-movies-btn'>All Movies</button>
      </NavLink>  
    </header>
  );
};

export default Nav;
