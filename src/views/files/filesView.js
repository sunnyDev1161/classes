import React from 'react';
import GenericFilesLayout from 'src/views/students/files';
import DashboardHeader from 'src/layouts/dashboardHeader';

const FilesView = props => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <DashboardHeader
        pageTitle={'My Files'}
        pageTitleBold={'Files'}
        variant={'files'}
        yellowBtnTitle={'UPLOAD FILES'}
      />
      <GenericFilesLayout data={data} />
    </div>
  );
};

export default FilesView;
