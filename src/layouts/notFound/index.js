import React from 'react';
import notFound from 'src/assets/images/404.PNG';

const style = {
  width: '100%',
  height: '100%',
  background: `url(${notFound})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
};
const NotFound = () => <div style={style}></div>;

export default NotFound;
