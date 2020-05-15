import React from 'react';
import SideDrawer from './sideDrawer';
const DrawerView = props => {
  const { menu, className, onCrossClick } = props;
  return (
    <>
      <SideDrawer
        menu={menu}
        drawerCollapse={className}
        onCrossClick={onCrossClick}
      />
    </>
  );
};

export default DrawerView;
