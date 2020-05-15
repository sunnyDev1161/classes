import React from 'react';
import HomeView from './HomeView';

const HomeLayout = props => {
  const { statistics } = props;
  return <HomeView statistics={statistics} />;
};

export default HomeLayout;
