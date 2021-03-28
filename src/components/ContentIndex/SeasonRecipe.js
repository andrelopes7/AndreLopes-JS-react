import React from 'react';
import { Link } from 'react-router-dom'

const SeasonRecipe = ({ recipe }) => 
{  
  const slice = recipe.slice( recipe.length -2 )
     return (
     <>
    <span className="content-bestRecipe--title">
      Nos recette de saison 
    </span>  
    {slice.map((Recipe) => (
      <Link to={`/recipe/${Recipe.slug}`} key={recipe.id} className="content-SeasonRecipe">
      <div className="content-SeasonRecipe--title">{Recipe.name}</div>
      <div className="content-SeasonRecipe--card"> 
        <div className="content-SeasonRecipe--picture" style={{ backgroundImage: `url(${Recipe.picture})` }} /> 
        
        <div className="content-SeasonRecipe--detail">
        <p className= 'content-SeasonRecipe--ptitle'>difficulte</p>
        <p className= 'content-SeasonRecipe--p'>facile</p>

        <p className= 'content-SeasonRecipe--ptitle'>auteur</p>
        <p className= 'content-SeasonRecipe--p'>john doe</p>
        </div>
      </div>
    </Link>
    ))
    }
    </>  
    )
    }
export default SeasonRecipe;

