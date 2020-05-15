import React from 'react';
import CustomButton from 'src/layouts/button';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  buttons: {
    background: 'black',
    color: 'white',
    margin: '0 5px',
    fontSize: '10px'
  }
}));

const ButtonsContainer = props => {
  const {
    onStudentsClick,
    onArchivesClick,
    onClassesClick,
    onFilesClick,
    btn1 = false,
    btn2 = false,
    btn3 = false,
    btn4 = false,
    className = ''
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.root + ' ' + 'displayBlock studentsHeaderButton'}>
      <CustomButton
        title={'LIST OF STUDENTS'}
        className={btn1 ? className + ' ' + classes.buttons : classes.buttons}
        onClick={onStudentsClick}
      />
      <CustomButton
        title={'CLASSES'}
        className={btn2 ? className + ' ' + classes.buttons : classes.buttons}
        onClick={onClassesClick}
      />
      <CustomButton
        title={'ARCHIVED COURSES'}
        className={btn3 ? className + ' ' + classes.buttons : classes.buttons}
        onClick={onArchivesClick}
      />
      <CustomButton
        title={'MY FILES'}
        className={btn4 ? className + ' ' + classes.buttons : classes.buttons}
        onClick={onFilesClick}
      />
    </div>
  );
};

export default ButtonsContainer;
