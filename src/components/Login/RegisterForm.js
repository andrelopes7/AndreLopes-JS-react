/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoginForm } from '../../action';

const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <div className="registerForm">
      <form className="registerForm-content form">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="email" placeholder="email" />
        <label className="label">
          Choisir un type de régime alimentaire :
          <select>
            <option value="Vegetarien">Végétarien</option>
            <option value="sans-porc">Sans porc</option>
            <option value="sans-glutten">Sans glutten</option>
          </select>
        </label>
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Verifier votre mot de passe" />
        <button type="button">Créer mon compte</button>
        <p className="message">Déja enregistré ? <a href="#" onClick={() => dispatch(setIsLoginForm(true))}>Se connecter</a></p>
      </form>
    </div>
  );
};
export default RegisterForm;
