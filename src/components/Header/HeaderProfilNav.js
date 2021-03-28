import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowLoginForm } from '../../action';

const HeaderProfilNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="headerProfilNav">
      <a className="headerToogle-link" href="#" onClick={() => dispatch(setShowLoginForm(true))}>Connexion</a>
      <a className="headerToogle-link" href="#">Espace personnel</a>
    </div>
  );
};
export default HeaderProfilNav;
