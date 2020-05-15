import React from 'react';
import ForgotForm from './ForgotForm';

function LoginView(props) {
  const { inputData = [], newPassword = [] } = props;
  return (
    <div>
      <ForgotForm inputData={inputData} newPassword={newPassword} />
    </div>
  );
}

export default LoginView;
