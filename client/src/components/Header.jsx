import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='nav-bar'>
          <li className='logo'>
            <Link to='/'>
              <img src='/images/logo.png' alt='Logo' />
            </Link>
          </li>
          <input type='checkbox' id='check' />
          <span className='menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <label htmlFor='check' className='close-menu'>
              <i className='fas fa-times' aria-hidden='true'></i>
              <span className='sr-only'>Close menu</span>
            </label>
          </span>
          <label htmlFor='check' className='open-menu'>
            <i className='fas fa-bars' aria-hidden='true'></i>
            <span className='sr-only'>Open menu</span>
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
