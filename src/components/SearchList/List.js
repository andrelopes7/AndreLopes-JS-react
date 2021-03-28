import React from 'react';

const List = ({ key, className, argument, research }) => {
  const handlerClick = () => {
    research();
  };

  return(
    <li key={key} className={className} onClick={handlerClick}>
      {argument}
    </li>
  );
};
export default List;
