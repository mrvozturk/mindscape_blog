import React from 'react';
import '../index.css';

const Navbar = () => {
  const handleClick = () => {};

  return (
    <nav className='navbar'>
      <h1 className='header' onClick={handleClick}>
        Logo
      </h1>
      <ul className='navbar-links'>
        <li>
          <a href='.' className='active'>
            About
          </a>
        </li>
        <li>
          <a href='.'>Work</a>
        </li>
        <li>
          <a href='.'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
