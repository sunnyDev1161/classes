import React from 'react';
import { makeStyles } from '@material-ui/core';
import { inputTheme } from 'src/theme';

const useStyles = makeStyles(theme => ({
  btn: inputTheme.formBtn,
  icon: { marginRight: '5px' }
}));
const CustomButton = props => {
  const classes = useStyles();
  const {
    style = {},
    className,
    type = '',
    title = '',
    icon = false,
    onClick
  } = props;
  return (
    <button
      className={classes.btn + ' ' + className}
      type={type}
      style={style}
      onClick={onClick}
    >
      {title}
      {icon && <i className={`fas fa-users ${classes.icon}`} />}
    </button>
  );
};

export default CustomButton;
