import React, { useState } from 'react';

import LoginView from '../../component/view/auth/login';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  return <LoginView 
    onEmailChange={(value) => setEmail(value)}
    onPasswordChange={(value) => setPassword(value)}
    onCheckRememberMe={() => setRememberMe(!rememberMe)}
    email={email}
    disabled={(email.length <= 2 || password.length <= 5)}
    password={password}
    rememberMe={rememberMe}
  />;
};

export default login;
