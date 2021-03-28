import React from 'react';

const Ingredient = ({ ingredients }) => {
  console.log(ingredients, 'list')
  const regexA = /[A]+/g;
  const regexB = /[B]+/g;
  const A = ingredients.replace(regexA, '<p>');
  const B = A.replace(regexB, '</p>');
  
  function createMarkup() {
    return {__html: B};
  }


  return(
  <ul className="detail-ingredient--ingredients">
    <h1 className="detail-ingredient--title">Ingredients </h1>
    
          <li  className="detail-ingredient--detail" dangerouslySetInnerHTML={createMarkup()} />
  </ul>
)};
export default Ingredient;
