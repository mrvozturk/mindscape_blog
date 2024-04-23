import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import aboutImage from '../images/logo1.jpeg';

const Navbar = () => {
  const handleClick = () => {};

  return (
    <nav className='navbar'>
      <Link to='/' className='header' onClick={handleClick}>
      <img src={aboutImage} alt='About' className='navbarlogo' />
      </Link>

      <ul className='navbar-links'>
        <li>
          <Link to='/aboutversion' className='nav-link '>
            Hakkında
          </Link>
        </li>
        <li>
          <Link to='/workversion' className='nav-link'>
            Çalışmalar
          </Link>
        </li>
        <li>
          <Link to='/contact' className='nav-link'>
            İletişim{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
