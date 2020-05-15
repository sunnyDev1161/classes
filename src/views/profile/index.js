import React from 'react';
import ProfileView from './profileView';
const ProfileLayout = props => {
  const { deleteData = [] } = props;
  return (
    <>
      <ProfileView deleteData={deleteData} />
    </>
  );
};

export default ProfileLayout;
