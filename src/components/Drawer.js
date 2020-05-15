import React from 'react';
import DrawerView from 'src/views/sideDrawer';
const SideDrawer = props => {
  const { className, onCrossClick } = props;
  const menu = [
    {
      title: 'Home',
      icon: 'fas fa-home',
      path: '/home',
      id: 1
    },
    {
      title: 'Calendar',
      icon: 'far fa-calendar-alt',
      path: '/calendar',
      id: 2
    },
    {
      title: 'My Classes',
      icon: 'fas fa-users',
      path: '/classes',
      id: 3
    },
    {
      title: 'My Courses',
      icon: 'fas fa-graduation-cap',
      path: '/courses',
      id: 4
    },
    {
      title: 'My Archives',
      icon: 'far fa-folder-open',
      path: '/archives',
      id: 5
    },
    {
      title: 'My Files',
      icon: 'far fa-folder-open',
      path: '/files',
      id: 6
    },
    {
      title: 'My Profile',
      icon: 'fas fa-user-tie',
      path: '/profile',
      id: 7
    },
    {
      title: 'Sign Out',
      icon: 'fas fa-sign-out-alt',
      path: '/sign-out',
      id: 8
    }
  ];
  return (
    <>
      <DrawerView
        menu={menu}
        className={className}
        onCrossClick={onCrossClick}
      />
    </>
  );
};

export default SideDrawer;
