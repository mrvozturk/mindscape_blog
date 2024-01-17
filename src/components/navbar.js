import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const handleClick = () => {
    // Handle click action if needed
  };

  return (
    <nav className='navbar'>
      <Link to="/" className='header' onClick={handleClick}>
        Logo
      </Link>
      
      <ul className='navbar-links'>
        <li>
          <Link to="/aboutversion2" className='nav-link active'>
            About
          </Link>
        </li>
        <li>
          <Link to="/work" className='nav-link'>
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
