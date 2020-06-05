import React from 'react';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import { inputTheme } from 'src/theme';

const useStyles = makeStyles(theme => ({
  btn: inputTheme.formBtn,
  icon: { marginRight: '5px' },
  black: { color: 'white', background: 'black' },
  yellow: { color: 'black', background: THEMES.YELLOW_BTN }
}));
const CustomButton = props => {
  const classes = useStyles();
  const {
    style = {},
    className,
    type = '',
    title = '',
    icon = false,
    onClick,
    black = false,
    yellow = false
  } = props;
  return (
    <button
      className={
        black
          ? classes.btn + ' ' + className + ' ' + classes.black
          : classes.btn + ' ' + className + ' ' + classes.yellow
      }
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
