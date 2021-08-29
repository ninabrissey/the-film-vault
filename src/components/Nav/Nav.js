import './Nav.css';
import logo from '../../logo.png';

const Nav = () => {
  return (
    <header>
      <h1><img className='logo' src={logo} alt='the film vault logo and link to go to main page'/></h1>
    </header>
  );
};

export default Nav;
