
import React from 'react';
import { useHistory } from 'react-router-dom'

const SearchBar = ({ changeValue, newValue, research,  name, placeholder}) => {

  let history = useHistory();
  const HandlerChange = (evt) => {
    changeValue(evt.target.value);
  };
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    research(newValue);
    history.push('/')
  };

  return (
    <div className='header-researchBar' >
      <form onSubmit={handlerSubmit} className="header-researchBar--form">
        <input type="text" className='header-researchBar--input' name={name} placeholder={placeholder} onChange={HandlerChange} value={newValue} />
        <button className='header-researchBar--logo' type="submit">&#128269;</button>
      </form>
    </div>
  );
};
export default SearchBar;
