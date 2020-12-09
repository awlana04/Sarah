import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/pages/register.css';

function Register() {
  return (
    <div id="page-register">
      <Header />

      <div className="register animate-right">
        <h1>Cadastro</h1>
        
        <div className="box">
          <form>
            <div className="left-inputs">
              <label>NOME DO REGISTRADOR</label><br /><br />
              <input type="text" placeholder="Nome Completo"/><br />
              
              <label>MATRÍCULA</label><br /><br />
              <input type="type" placeholder="Matrícula"/><br />
              
              <label>INSTITUIÇÃO ONDE ATUA</label><br /><br />
              <input type="text" placeholder="Sigla da Insituição"/><br />
            </div>

            <div className="right-inputs">
              <label>EMAIL</label><br /><br />
              <input type="email" placeholder="O email da clínica"/><br />

              <label>SENHA</label><br /><br />
              <input type="password" placeholder="Senha"/><br />

              <label>CONFIRMAR SENHA</label><br /><br />
              <input type="password" placeholder="Digite a senha novamente"/><br />
            </div>

            <div className="button">
              <button type="submit">REALIZAR CADASTRO</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
