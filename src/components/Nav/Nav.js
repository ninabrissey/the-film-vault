import './Nav.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <header>
      <h1>
        <Link to='/'>
          <img 
          className='logo' 
          src={logo} 
          alt='the film vault logo and link to go to main page'
          onClick={() => props.showAllMovies()}
        />
        </Link>
      </h1>
    </header>
  );
};

export default Nav;
