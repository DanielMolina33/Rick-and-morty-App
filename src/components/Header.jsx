import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';
import logo from '../assets/images/logoRickAndMorty.png';

function Header(){
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo rick and morty"/>
      </Link>
    </header>
  );
}

export default Header;
