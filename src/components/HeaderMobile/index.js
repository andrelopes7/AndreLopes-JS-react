import React from 'react';
import { Link, Route } from 'react-router-dom'
import DisplayFilters from '../../container/Header/displayFilter'
import './style.scss';

const HeaderMobile = () => (
  <div className="HeaderMobile">
    <div className="HeaderMobile--menu">	&#x2630;   
      <div className="HeaderMobile--AllLink">
      <Link to= '/blog' className="HeaderMobile--Link">	 notre blog </Link>
      <Link to='/Espace_enfant' className="HeaderMobile--Link">Espace enfant</Link>
      <Link to= '/aliments' className="HeaderMobile--Link">les aliments</Link>
      <Link className="HeaderMobile--Link" to="/mieux_cuisine">apprendre à cuisiner </Link>
      <Link className="HeaderMobile--Link"  to="/toutes_les_recette">toutes nos recettes  </Link>
      </div>
    </div>
    <Link className="HeaderMobile--title" to='/'>O' chef </Link>
    <div className="HeaderMobile--search">&#x1F50D; 
        <DisplayFilters 
        className="HeaderMobile-allFilter"/>
    </div> 
   <div className="HeaderMobile--logo" > <img  className="HeaderMobile--picture" src='https://previews.123rf.com/images/tanyastock/tanyastock1607/tanyastock160703414/60352678-ic%C3%B4ne-de-l-utilisateur-symbole-de-la-personne-humaine-flat-bouton-web-avec-l-ic%C3%B4ne-sur-fond-blanc-bo.jpg' alt=""/></div>
  </div>
)
export default HeaderMobile;
