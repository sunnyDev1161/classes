import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ForgotView from 'src/views/auth/ForgotView';

function Forgot(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const inputData = [
    {
      name: 'email',
      type: 'email',
      value: email,
      onChange: e => setEmail(e.target.value),
      id: 1,
      placeHolder: 'Enter Email address',
      icon: 'far fa-envelope'
    }
  ];
  const newPassword = [
    {
      name: 'newPassword',
      type: 'password',
      value: password,
      onChange: e => setPassword(e.target.value),
      id: 1,
      placeHolder: 'ENTER NEW PASSWORD',
      icon: 'fas fa-unlock-alt'
    },
    {
      name: 'confirmPassword',
      type: 'password',
      value: confirmPassword,
      onChange: e => setConfirmPassword(e.target.value),
      id: 1,
      placeHolder: 'CONFIRM PASSWORD',
      icon: 'fas fa-unlock-alt'
    }
  ];
  return (
    <>
      <ForgotView inputData={inputData} newPassword={newPassword} />
    </>
  );
}

Forgot.propTypes = {
  children: PropTypes.any
};
export default Forgot;
