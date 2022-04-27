import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />

      <div className='header-right'>
        <Link to='locations' spy={true} smooth={true}>Locations</Link>
        <Link to='leadership' spy={true} smooth={true}>Leadership</Link>
        <Link to='contact' spy={true} smooth={true}>Parent Contact</Link>
        <Link to='employment' spy={true} smooth={true}>Employment</Link>
      </div>
    </header>
  );
};

export default Header;
