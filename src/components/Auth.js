import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginView from 'src/views/auth/LoginView';

function Auth(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputData = [
    {
      name: 'email',
      type: 'email',
      value: email,
      onChange: e => setEmail(e.target.value),
      id: 1,
      placeHolder: 'Enter Email address',
      icon: 'far fa-envelope'
    },
    {
      name: 'password',
      type: 'password',
      value: password,
      onChange: e => setPassword(e.target.value),
      id: 2,
      placeHolder: 'Enter Password',
      icon: 'fas fa-unlock-alt'
    }
  ];
  return (
    <>
      <LoginView inputData={inputData} />
    </>
  );
}

Auth.propTypes = {
  children: PropTypes.any
};
export default Auth;
