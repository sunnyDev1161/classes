import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { THEMES } from 'src/constants';
import person from 'src/assets/images/person.png';
import CustomAvatar from 'src/layouts/avatar';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: '240px',
    background: 'white',
    height: '100%',
    top: '70px',
    transition: '0.3s ease-in-out'
  },
  avatarContainer: {
    padding: '20px 0',
    borderTop: `1px solid ${THEMES.BORDER_COLOR}`,
    borderBottom: `1px solid ${THEMES.BORDER_COLOR}`,
    position: 'relative'
  },
  avatar: {
    background: `url(${person})`,
    backgroundSize: 'cover',
    borderColor: THEMES.YELLOW_BTN,
    width: '70px',
    height: '70px',
    margin: '0 auto'
  },
  name: {
    fontWeight: '600',
    textAlign: 'center',
    marginTop: '5px'
  },
  email: {
    fontSize: THEMES.REGULARFONT,
    textAlign: 'center',
    color: THEMES.GRAYFONT
  },
  menuContainer: {
    padding: '20px 42px'
  },
  list: {
    listStyle: 'none',
    lineHeight: '40px'
  },
  menuWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    fontSize: '20px',
    color: THEMES.BORDER_COLOR,
    flex: '1'
  },
  link: {
    textDecoration: 'none',
    marginLeft: '10px',
    color: 'gray',
    fontSize: THEMES.REGULARFONT,
    flex: '5'
  },
  active: {
    color: THEMES.YELLOW_TEXT
  },
  cross: {
    position: 'absolute',
    right: '12px',
    fontSize: '24px',
    padding: '6px',
    color: THEMES.YELLOW_BTN,
    borderRadius: '5px',
    display: 'none'
  }
}));
const SideDrawer = props => {
  const classes = useStyles();
  const [activeMenu, setActiveMenu] = useState('');
  const { menu, drawerCollapse, onCrossClick } = props;
  useEffect(() => {
    let path = props.location.pathname;
    setActiveMenu(path);
  }, [props.location.pathname]);
  return (
    <div className={classes.root + ' ' + drawerCollapse}>
      <div className={classes.avatarContainer}>
        <i
          className={`fas fa-times ${classes.cross} cross`}
          onClick={onCrossClick}
        ></i>
        <CustomAvatar className={classes.avatar} />
        <p className={classes.name}>John Doe</p>
        <p className={classes.email}>hellojohndoe@gmail.com</p>
      </div>
      <div className={classes.menuContainer}>
        <ul className={classes.list}>
          {menu.map((val, index) => {
            return (
              <li key={val.id + '_' + index} className={classes.menuWrapper}>
                <i
                  className={
                    activeMenu === val.path
                      ? val.icon + '  ' + classes.icon + ' ' + classes.active
                      : val.icon + '  ' + classes.icon
                  }
                />
                <Link
                  to={val.path}
                  className={
                    activeMenu === val.path
                      ? classes.link + ' ' + classes.active
                      : classes.link
                  }
                >
                  {val.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(SideDrawer);
