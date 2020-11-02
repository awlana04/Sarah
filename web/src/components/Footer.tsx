import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo-sarah.svg';
import LogoDesiderata from '../images/logo-desiderata.svg';
import LogoShawee from '../images/logo-shawee.svg';

import '../styles/components/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="images">
        <Link to="/" className="logo-sarah">
          <img src={Logo} alt="Sarah"/>
        </Link>

        <Link to="https://desiderata.org.br/" className="logo-desiderata">
          <img src={LogoDesiderata} alt="Desiderata"/>
        </Link>

        <Link to="https://shawee.io/pt/" className="logo-shawee">
          <img src={LogoShawee} alt="Shawee"/>
        </Link>
      </div>
        
      <p>TIME 6 HACKATHON SAÚDE INFANTIL ®2020</p> 
    </footer>
  );
};
