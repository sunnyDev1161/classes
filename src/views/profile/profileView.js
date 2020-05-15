import React from 'react';
import DashboardHeader from 'src/layouts/dashboardHeader';
import { makeStyles } from '@material-ui/core';
import teacher from 'src/assets/images/teacher.png';
import { THEMES } from 'src/constants';
import { inputTheme } from 'src/theme';
import LeftCard from './leftCard';
import RightCard from './rightCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarContainer: {
    width: '100%',
    padding: '10px'
  },
  inputContainer: {
    width: '60%',
    margin: '0',
    padding: '10px'
  },
  cards: {
    minHeight: '100px',
    height: 'fit-content',
    maxHeight: 'fit-content',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto'
  },
  avatar: {
    background: `url(${teacher})`,
    backgroundSize: 'cover',
    margin: '0 auto 10px auto'
  },
  name: { color: 'black' },
  profileText: { color: 'black', textAlign: 'left', margin: '10px 5px' },
  email: { fontSize: '10px', color: THEMES.GRAYFONT },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    margin: 'auto',
    paddingTop: '10px'
  },
  blackBtn: {
    margin: '5px',
    background: 'black',
    color: 'white',
    padding: '10px 18px',
    fontSize: '10px'
  },
  yellowBtn: {
    margin: '5px',
    background: THEMES.YELLOW_BTN,
    color: 'black',
    padding: '10px 18px',
    fontSize: '10px'
  },
  saveBtn: {
    margin: '5px',
    background: THEMES.YELLOW_BTN,
    color: 'black',
    width: 'fit-content',
    float: 'right',
    padding: '16px 30px',
    fontSize: '13px'
  },
  fullInput: { maxWidth: '98%!important' },

  input: {
    ...inputTheme.input,
    paddingLeft: '10px',
    margin: '5px',
    maxWidth: '100%'
  },
  avatarWrapper: {
    width: '40%'
  }
}));
const ProfileView = props => {
  const { deleteData = [] } = props;
  const classes = useStyles();
  return (
    <>
      <DashboardHeader
        pageTitle={'SETTINGS'}
        pageTitleBold={'Change My Account Information'}
      />

      <div className={classes.root + ' ' + 'profileViewContainer'}>
        <LeftCard classes={classes} deleteData={deleteData} />
        <RightCard classes={classes} />
      </div>
    </>
  );
};

export default ProfileView;
