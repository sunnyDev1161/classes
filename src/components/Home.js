import React from 'react';
import HomeLayout from 'src/views/home';
const Home = props => {
  const statistics = [
    {
      desc: 'total number of courses',
      qty: 22,
      id: 1
    },
    {
      desc: 'total number of classes',
      qty: 10,
      id: 2
    },
    {
      desc: 'total number of my students',
      qty: 75,
      id: 3
    },
    {
      desc: 'thee next courses',
      qty: 5,
      id: 4
    }
  ];
  return (
    <>
      <HomeLayout statistics={statistics} />
    </>
  );
};

export default Home;
