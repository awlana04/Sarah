import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/pages/landing.css';

function Landing() {
  return (
    <div id="page-landing">
      <Header />

      <div className="landing animate-right">
        <h1>Bem-vindo à plataforma <br/> SARAH!</h1>

        <h3 className="text-one">SARAH é a sigla para Serviço de Acompanhamento <br /> e Registro de Apoio Humanizado e é uma solução para o <br /> mapeamento em tempo real do câncer infantojuvenil <br /> com dados consistentes e digitais.</h3>
        <h3 className="text-two">Com a ajuda de SARAH será possível traçar novas soluções <br /> e estratégias de políticas públicas para o combate  <br /> contra o câncer infanto juvenil.</h3>

        <div className="buttons">
          <Link to="/register">
            <button className="register">CADASTRE-SE</button>
          </Link>

          <Link to="/login">
            <button className="login">JÁ TENHO CONTA</button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Landing;
