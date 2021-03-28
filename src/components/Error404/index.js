import React, { componentDidMount, useEffect } from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom'

const Error404 = () => {

  let history = useHistory();
  const timer = setTimeout(() => {
      history.push('/')
    }, 5000);

  timer
  return (
   
  <div className="error"> Cette page n existe pas <br />  vous allez etre redigere dans quelque seconde </div>
)}
export default Error404;
