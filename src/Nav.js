import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './images/logo-diamond-full.png';

function Nav() {
  return (
    <div className='nav-bar'>
      <Link to='/'>
        <img src={logo} className='logo' alt='Vendor Connect logo' />
      </Link>
    </div>
  );
}

export default Nav;