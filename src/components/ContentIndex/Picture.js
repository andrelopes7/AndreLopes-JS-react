
import React from 'react';

const Picture = ({ thumbnail, className, difficulty }) => (

  <div className={className} style={{ backgroundImage: `url(${thumbnail})` }} >
    { 
      difficulty ? '' :<div className= "content-card--difficulty">
        {difficulty}
      </div>
    }
  </div>
  );

export default Picture;
