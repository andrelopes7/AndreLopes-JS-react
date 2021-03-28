
import React from 'react';



const SearchBar = ({ changeValue, newValue, research, messageError}) => {

  

  const HandlerChange = (evt) => {
    changeValue(evt.target.value);
  };
  const handlerSubmit = (evt) => {
    evt.preventDefault();
      research(newValue);
  }


  return (
    <div className="content-search">
      <form onSubmit={handlerSubmit}>
        <input type="text" className="content-search--input" placeholder="saisisser un nom de recette ou d ingredient" onChange={HandlerChange} value={newValue} />
        <button className="content-search--logo" type="submit">&#128269;</button>
      </form>
      <div className="error">{messageError}</div>
    </div>
  );
};
export default SearchBar;
