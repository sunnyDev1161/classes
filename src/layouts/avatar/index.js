import React from 'react';

import { makeStyles } from '@material-ui/core';
import { avatar } from '../../theme';
const useStyles = makeStyles(theme => ({
  avatar: { ...avatar }
}));
const CustomAvatar = props => {
  const classes = useStyles();
  const { style = {}, className = '', onClick } = props;
  return (
    <div className={classes.avatar + ' ' + className} onClick={onClick}></div>
  );
};

export default CustomAvatar;
