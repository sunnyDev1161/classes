import React, { useState } from 'react';
import ProfileLayout from 'src/views/profile';
const Profile = props => {
  const [deleteEmai, setDeleteEmail] = useState('');

  const deleteData = [
    {
      name: 'email',
      type: 'text',
      value: deleteEmai,
      placeHolder: 'Enter email',
      onChange: e => setDeleteEmail(e.target.value),
      id: 'remove_email',
      icon: ''
    }
  ];
  return (
    <>
      <ProfileLayout deleteData={deleteData} />
    </>
  );
};

export default Profile;
