import React from 'react'; 
 
const Input = ({ 
  type,
  className,
  name,
  FormValue,
  value,
  label, 
  accept
  })  => {
     
    
    return(
      <>
      <span className='userForm--descript' >{label}</span>
      <input 
      type={type}
      name= {name} 
      placeholder= { `saisissez votre ${label}`} 
      className={className} 
      value= {value}
      accept = {accept} 
      onChange = {(evt) => (FormValue(evt.target.value)) }
       />
        </>
   )}
export default Input
