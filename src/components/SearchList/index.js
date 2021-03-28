import React from 'react';
import List from '../../container/SearchList/List';
import './style.scss';

const SearchList = ({ AllRecipes}) => {
const handlerClick = (evt) => {
  changeValue()
}
return(
    <div className="search">
      <div className="search-buttons">
        <nav className="search-button favoris">favoris </nav>
        <nav className="search-button best">mieux note</nav>
        <nav className="search-button news">nouveautés</nav>
      </div>
 
    <ul className="search-list">
      {
         AllRecipes.map((recipeList) => (
           <List
             key={recipeList.title}
             className="search-name"
             argument={recipeList.title}
           />
           
           
         ))

      }
    </ul>
  </div>
)};
export default SearchList;
