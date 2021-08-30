import './Nav.css';
import logo from '../../logo.png';

const Nav = (props) => {
  return (
    <header>
      <h1>
        <img 
          className='logo' 
          src={logo} 
          alt='the film vault logo and link to go to main page'
          onClick={() => props.showAllMovies()}
        />
      </h1>
    </header>
  );
};

export default Nav;
