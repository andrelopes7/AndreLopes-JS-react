import React from 'react';
import './style.scss';
import { useParams, Redirect, Switch} from 'react-router-dom'
import Instruction from './Instruction';
import Ingredient from 'src/container/Detail/ingredient';

const Detail = ({ recipes })  => {
  
  const  {slug} = useParams()
  const Recipe = recipes.find((recipe) => (recipe.slug === slug ))
  console.log(Recipe, 'slug')
  if(!Recipe || Recipe === undefined || Recipe.length === 0 ) {
    return (
    <Switch>
    <Redirect  from='*' to="/error/404" />
    </Switch>
    )
  }
  return (
    <div className ='detail'>
      <div className='detail-recipe'>
        <div className="detail-recipe--title">{Recipe.name} pour {Recipe.portions} {Recipe.portions>1 ? 'personnes' : 'personne'} </div>
          <div className="detail-recipe--flex">
          <div className="detail-recipe--flexPicture"> 
            <div className="detail-picture" style={{ backgroundImage: `url(${Recipe.picture})` }} />
            <div className="detail-ingredients"> 
              <Ingredient
                ingredients={Recipe.ingredientList}
              />
            </div>
          </div>
            <div className="detail-instruction"> 
              <Instruction 
                instructions ={Recipe.steps}
              />
            </div>  
          </div>
        </div>
      </div>

  );
}
export default Detail;
