import React from 'react';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import { inputTheme } from 'src/theme';
import { dashBoard } from 'src/theme';
import CustomInput from '../inputs';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 10px'
  },
  normalText: { ...dashBoard.normalText },
  largeText: { ...dashBoard.largeText },
  blackBtn: {
    ...dashBoard.dashboardBtn,
    color: 'white',
    background: THEMES.BLACK_BTN,
    marginLeft: '5px'
  },
  yellowBtn: {
    ...dashBoard.dashboardBtn,
    color: 'black',
    background: THEMES.YELLOW_BTN,
    marginLeft: '5px'
  },
  textContainer: { flex: '2', lineHeight: '30px' },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '4',
    justifyContent: 'flex-end'
  }
}));

const DashboardHeader = props => {
  const {
    pageTitle = '',
    pageTitleBold = '',
    blackBtnTitle = '',
    yellowBtnTitle = '',
    variant = '',
    onYellowBtnClick,
    onBlackBtnClick
  } = props;
  const classes = useStyles();
  const searchInput = {
    name: 'search',
    type: 'search',
    id: 'search',
    placeHolder: 'Find a Student'
  };
  return (
    <div className={classes.root + ' ' + 'dashboardHeader'}>
      <div className={classes.textContainer}>
        {pageTitle && (
          <p className={classes.normalText + ' ' + 'normalText'}>{pageTitle}</p>
        )}
        {pageTitleBold && (
          <p className={classes.largeText + ' ' + 'boldText'}>
            {pageTitleBold}
          </p>
        )}
      </div>
      <div className={classes.btnContainer}>
        {variant === 'students' ||
          (variant === 'files' && (
            <CustomInput search={searchInput} type="search" />
          ))}
        {blackBtnTitle && (
          <button
            className={classes.blackBtn + ' ' + 'btns'}
            onClick={onBlackBtnClick}
          >
            {blackBtnTitle} <i className="fas fa-plus" />
          </button>
        )}
        {yellowBtnTitle && (
          <button
            className={classes.yellowBtn + ' ' + 'btns'}
            onClick={onYellowBtnClick}
          >
            {yellowBtnTitle}
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
