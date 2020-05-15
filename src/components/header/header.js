import React from 'react';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import { formLogo } from 'src/theme';
import person from 'src/assets/images/person.png';
import CustomAvatar from 'src/layouts/avatar';
import CustomPopOver from 'src/layouts/popover';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px'
    // position: 'fixed',
    // width: '100%'
  },
  logo: { ...formLogo.logo, fontSize: '15px', margin: '0' },
  logoContainer: { flex: '1' },
  avatar: {
    width: '40px',
    height: '40px',
    background: `url(${person})`,
    backgroundSize: 'cover',
    borderColor: THEMES.YELLOW_BTN,
    margin: '0 0'
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: '1'
  },
  icons: {
    fontSize: '20px',
    marginRight: '14px'
  },
  name: {
    fontSize: '10px',
    marginLeft: '14px'
  }
}));
const Header = (props) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.logoContainer}>
        <p className={classes.logo}>LS CLASSES</p>
      </div>
      <div className={classes.avatarContainer}>
        <i class={`far fa-bell ${classes.icons}`}></i>
        <i class={`far fa-calendar-alt ${classes.icons}`}></i>
        <CustomAvatar className={classes.avatar} />
        <span className={classes.name}>John Doe</span>
        <CustomPopOver />
      </div>
    </header>
  );
};

export default Header;
