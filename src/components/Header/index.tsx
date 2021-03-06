import React from 'react';
import logo from '../../assets/general/tnt-logo.png'
import './Header.css';

const Header = () => {
  return (
    <header className='App-header'>
        <a href='/'>
            <img src={logo} className='App-logo' alt='logo' />
        </a>

      <div className='header-right'>
        <a href='/leadership'>Leadership</a>
        <a href='/contact-us'>Contact Us</a>
        <a href='/employment' >Employment</a>
      </div>
    </header>
  );
};

export default Header;
