import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const handleClick = () => {
  };

  return (
    <nav className='navbar'>
      <Link to="/" className='header' onClick={handleClick}>
        Logo
      </Link>
      
      <ul className='navbar-links'>
        <li>
          <Link to="/aboutversion" className='nav-link '>
            About
          </Link>
        </li>
        <li>
          <Link to="/workversion" className='nav-link'>
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className='nav-link'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
