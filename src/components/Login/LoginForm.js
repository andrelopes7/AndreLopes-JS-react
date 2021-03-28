import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoginForm } from '../../action';

const loginForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="loginForm">
      <form className="loginForm-content form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="button">Se connecter</button>
        <p className="message">Pas enregistré ? <a href="#" onClick={() => dispatch(setIsLoginForm(false))}>S'enregistrer</a></p>
      </form>
    </div>
  );
};
export default loginForm;
