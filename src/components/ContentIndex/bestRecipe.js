import React from 'react';
import Picture from './Picture';
import BestNoteRecipe from 'src/container/ContentIndex/bestNoteRecipe'
import SeasonRecipe from 'src/container/ContentIndex/SeasonRecipe'

const BestReacipe = () => (
  <div className="content-bestRecipe">
    <div className="content-SeasonRecipe--flex">  
      <SeasonRecipe />
    </div>
    <BestNoteRecipe />
   </div>

);
export default BestReacipe;
