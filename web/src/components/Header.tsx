import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo-sarah.svg';

import '../styles/components/header.css';

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo-upside">
        <img className="logo-upside-sarah" src={Logo} alt="Sarah"/>
      </Link>

      <p>SARAH - VERSÃO DESKTOP</p>
    </header>
  );
};
