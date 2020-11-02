import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/register.css';

function Register() {
  return (
    <div id="page-register">
      <Header />

      <div className="register animate-right">
        <h1>Cadastro</h1>
        
        <div className="box">
          <form>
            <div className="left-inputs">
              <label>NOME DO REGISTRADOR</label><br />
              <input type="text" className="inputs" placeholder="Nome Completo"/><br />
              
              <label>MATRÍCULA</label><br />
              <input type="type" className="inputs" placeholder="Matrícula"/><br />
              
              <label>INSTITUIÇÃO ONDE ATUA</label><br />
              <input type="text" className="inputs" placeholder="Sigla Da Instituição"/><br />
            </div>

            <div className="right-inputs">
              <label>EMAIL</label><br />
              <input type="email" className="inputs" placeholder="Email Clínico"/><br />

              <label>SENHA</label><br />
              <input type="password" className="inputs" placeholder="Senha"/><br />

              <label>CONFIRMAR SENHA</label><br />
              <input type="password" className="inputs" placeholder="Digite a senha novamente"/><br />
            </div>

            <div className="buttons">
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
