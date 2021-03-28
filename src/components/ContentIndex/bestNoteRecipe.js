import React from 'react'; 
import { Link } from 'react-router-dom';

const bestNoteRecipe = ({ recipe }) => 
{   
  const Recipe = recipe.find((recipe) => {return (recipe.name === 'Tarte au chocolat')}) 

return (
  <Link to={`/recipe/${Recipe.slug}`} className="content-bestNoteRecipe">
    <span className="content-bestRecipe--title">
      Nos recette la mieux note
    </span>
    <div className="content-bestNoteRecipe--flex">
    <div className="content-bestNoteRecipe--title">{Recipe.name}</div>
    <div className="content-bestNoteRecipe--card"> 
      <div className="content-bestNoteRecipe--picture" style={{ backgroundImage: `url(${Recipe.picture})`}} />
      
      <div className="content-bestNoteRecipe--detail">
      <p className= 'content-bestNoteRecipe--ptitle'>difficulte</p>
      <p className= 'content-bestNoteRecipe--p'>{Recipe.difficulty}</p>

      <p className= 'content-bestNoteRecipe--ptitle'>auteur</p>
      <p className= 'content-bestNoteRecipe--p'>{Recipe.author}</p>

      <p className= 'content-bestNoteRecipe--ptitle'>desciption</p>
      <p className= 'content-bestNoteRecipe--p'>{Recipe.description}</p>
      </div>
     
    </div>
  </div>
   <div className="content-bestNoteRecipe--descript" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio hic consequatur voluptatum ullam sed ratione neque dolorum earum animi? Quisquam asperiores ducimus itaque quod deleniti, voluptatem labore amet ad exercitationem?</div>
</Link>
)}
export default bestNoteRecipe;
