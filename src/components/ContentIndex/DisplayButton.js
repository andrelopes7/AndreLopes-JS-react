import React from 'react';
import AllFilters from './AllFilters';

const DisplayButton = ({ changeDisplay, displayValue }) => {
  console.log(displayValue);
  const handlerClick = () => {
    changeDisplay(!displayValue);
  };
  return (
    <div className="content-MoreFilter">
      <div className="content-buttonFilter">
        <div onClick={handlerClick}>
          plus de filtres
        </div>
      </div>
      { displayValue && <AllFilters /> }
    </div>
  );
};

export default DisplayButton;
