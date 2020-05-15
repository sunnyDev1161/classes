import React from 'react';
import RegisterForm from './RegisterForm';

function RegisterView(props) {
  const { inputData } = props;
  return (
    <div>
      <RegisterForm inputData={inputData} />
    </div>
  );
}

export default RegisterView;
