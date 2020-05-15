import React, { useState } from 'react';
import RegisterView from 'src/views/auth/RegisterView';

const Register = () => {
  const [fName, setfName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  const inputData = [
    {
      name: 'fName',
      type: 'text',
      value: fName,
      onChange: e => setfName(e.target.value),
      placeHolder: 'FULL NAME',
      id: 1,
      icon: 'far fa-envelope'
    },
    {
      name: 'email',
      type: 'email',
      value: email,
      onChange: e => setemail(e.target.value),
      placeHolder: 'EMAIL ADDRESS',
      id: 2,
      icon: 'far fa-envelope'
    },
    {
      name: 'password',
      type: 'password',
      value: password,
      onChange: e => setPassword(e.target.value),
      placeHolder: 'PASSWORD',
      id: 3,
      icon: 'fas fa-unlock-alt'
    },
    {
      name: 'cpassword',
      type: 'password',
      value: cPassword,
      onChange: e => setCpassword(e.target.value),
      placeHolder: 'CONFIRM PASSWORD',
      id: 3,
      icon: 'fas fa-unlock-alt'
    }
  ];
  return (
    <>
      <RegisterView inputData={inputData} />
    </>
  );
};

export default Register;
