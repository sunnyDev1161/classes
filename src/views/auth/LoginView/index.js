import React from 'react';
import LoginForm from './LoginForm';

function LoginView(props) {
  const { inputData } = props;
  return (
    <div>
      <LoginForm inputData={inputData} />
    </div>
  );
}

export default LoginView;
