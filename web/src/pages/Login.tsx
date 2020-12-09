import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/pages/login.css';

function Login() {
  return (
    <div id="page-login">
      <Header />

      <div className="login animate-right">
        <h1>Login</h1>
        
        <form>
          <input className="email" type="email" placeholder="Email" />
          <input className="password" type="password" placeholder="Senha" />
          
          <button className="button"type="submit" name="login">LOGIN</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
