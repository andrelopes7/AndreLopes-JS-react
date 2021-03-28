import React from 'react';
import Input from 'src/container/form/input'
import './style.scss';

const UserForm = ({typeFormValue, sendUserForm, nameValue, pictureValue, passwordValue, mailValue}) => (
  
  <form className= 'userForm'>
    { typeFormValue === "inscription" && <Input className= 'userForm--input' name='nameValue' type='text' value = {nameValue} label ='nom'/>}
    { typeFormValue === "inscription" &&<Input className= 'userForm--input' name='passwordValue' type='password' value = {passwordValue} label ='mot de passe'/>}
    { typeFormValue === "inscription" &&<Input className= 'userForm--input' name='mailValue' type='text' value = {mailValue} label ='email'/>}
    { typeFormValue === "inscription" && <Input className= 'userForm--uploadFile' name='pictureValue' type='file'  accept="image/png, image/jpeg/" label ='photo'/> }

    { typeFormValue === "connection" && <Input className= 'userForm--input' name='nameValue' type='text' value = {nameValue} label ='nom'/>}
    { typeFormValue === "connection" &&<Input className= 'userForm--input' name='passwordValue' type='password'value = {passwordValue} label ='mot de passe'/>}

    { typeFormValue === "forgotPassword" &&<Input className= 'userForm--input' name='mailValue' type='text' value = {mailValue} label ='email'/>}
  
    <button type='submit' className='userForm--submit'>
      envoyer
    </button>
  </form>
  
)
export default UserForm;
