import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import './style.scss';

const Login = () => {
  const isLoginForm = useSelector((state) => state.isLoginForm);
  return (
    <div className="login">
      <div className="login-content">
        {isLoginForm ? <LoginForm />
          : <RegisterForm />}
      </div>
    </div>
  );
};

export default Login;
