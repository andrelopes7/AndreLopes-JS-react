import React from 'react';
import PropTypes from 'prop-types';
import {UsePrams, Link, Redirect, BrowserRouter} from 'react-router-dom';
import BestRecipe from 'src/container/ContentIndex/bestrecipe';

import './style.scss';
import Picture from './Picture';

const Content = ({ recipes, error }) => {

  return (
    <div className="content">
      <div className="content-bestRecipe">
        <div className="content-error">{error}</div>
          <BestRecipe />
        </div>
      <div className="content-allRecipe">
        
        <div className="content-allRecipe--card">
          { 
            recipes.map(( recipe ) => {
              return(
                <div key={recipe.id} className="content-card" >
                  <Link to={`/recipe/${recipe.slug}`} >
                    <Picture 
                      thumbnail={recipe.picture}
                      className= 'content-card--card'
                      difficulty = {recipe.difficulty}
                    />
                  <div className="content-card--title">{recipe.name} </div>
               </Link>
                </div>
              
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
export default Content;
