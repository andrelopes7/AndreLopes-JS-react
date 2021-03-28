const research = state.recipes.find((recipe) => { 
  console.log(state.recipes.research) 
  switch (state.research){
    case recipe.title:
      return (recipe);
    case recipe.newId: 
      return (recipe)
  }
})
return {
  recipe: research,
};

const createNewId = (array) => (array.map((changeRecipe, index) => ({ ...changeRecipe, newId: index })));  


import React from 'react';

const Picture = ({ thumbnail, title ,recipesLength, recipeId, research, numberCustomers, newValue, changeValue}) => {
  console.log(title)
  return (
  <div className="picture_image" style={{ backgroundImage: `url(${thumbnail})` }}>
    <div className="arrow">
    { recipeId ===0 ?  '' : <p onClick= {()=> {research(recipeId - 1)}} >&lt;</p>}
      <h1 className="picture-title">{title}</h1>
     {recipeId > recipesLength - 2 ?  '' : <p onClick= {()=> {research(recipeId + 1)}}>&gt;</p>}
    </div>
    <form>

    </form>
    <div className="content-numberCustomers">pour { numberCustomers } {numberCustomers === 1 ? 'personne' : 'personnes' }
    
    </div>
  </div>
  )};
export default Picture;
