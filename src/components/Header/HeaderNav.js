import React from 'react';
import { Link, Route} from 'react-router-dom';
import DisplayFilters from 'src/container/Header/displayFilter';


const HeaderNav = () => {

 
  return (
  <div className="header-nav">
    <div className="header-navbar">
    <Link to= '/blog' className="header-navbar-link">	 notre blog </Link>
      <Link to='/Espace_enfant' className="header-navbar-link">Espace enfant</Link>
      <Link to= '/aliments' className="header-navbar-link">les aliments</Link>
      <Link className="header-navbar-link" to="/mieux_cuisine">apprendre à cuisiner </Link>
      <Link className="header-navbar-link"  to="/toutes_les_recette">toutes nos recettes  </Link>
      <Route path='/recipe' or exact path='/'  > 
        <div className="header-navbar--moreFilter">
          plus de filtres
          <DisplayFilters 
            className= 'header-allFilter'/>
        </div>
      </Route>
      
    </div>
 
</div>
)};

export default HeaderNav;
