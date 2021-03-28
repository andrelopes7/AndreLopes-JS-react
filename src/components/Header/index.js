import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from 'src/container/Header/headerNav';
import UserForm from 'src/container/form'

import './style.scss';

const Header = ({TypeForm, typeFormValue}) => {
  return (
  <div className="header"> 
    <div className="header-title"> 
      <div className="header-title--title">
        <Link className="header-title" to='/'>O' chef </Link>
      </div>
     <div className="header-title--descript">
       pour une alimentation meilleure et plus saine 
      </div>
   </div>
      <HeaderNav />

      <div className="header-connect" > 
      <img  className="header-connect--picture" src='https://pixabay.com/get/g4fa167d453f4407f33327b4e8dd97d8124bc5779c387af825f73b712106c537ed4bb3191e9ac6f6c65481b0ac9e6f715_640.jpg' alt=""/>
        <div className='header-connect--display' >
        <p className='header-connect--SortForm'  onClick={() => { TypeForm('inscription')}}> inscription </p>
        <p className='header-connect--SortForm' onClick={() => { TypeForm('connection')}}> connection </p>
        <p className='header-connect--SortForm' onClick={() => { TypeForm('forgotPassword')}}> mot de passe oublier </p>
    </div>
    <div className = "header-connect--DisplayForm">
      {typeFormValue  && <UserForm />}
    </div>
    </div>
    </div>
 
);
}
export default Header;
