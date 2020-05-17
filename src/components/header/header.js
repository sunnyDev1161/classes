import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import { formLogo } from 'src/theme';
import person from 'src/assets/images/person.png';
import CustomAvatar from 'src/layouts/avatar';
import CustomPopOver from 'src/layouts/popover';

const useStyles = makeStyles(theme => ({
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

const notifications = [
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: 'You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  },
  {
    id: 1,
    desc: ' You are invited by Name',
    user: 'Oscar L. valentino',
    time: '23m ago'
  }
];
const agenda = [
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  },
  {
    id: 1,
    desc: 'Course Name Text goes here',
    time: '23 april 2020'
  }
];
const Header = props => {
  const [open, setopen] = React.useState(null);
  const [title, setTitle] = React.useState('');
  const [data, setData] = React.useState([]);
  const classes = useStyles();

  const handleClick = (event, name, menuData) => {
    setopen(event.currentTarget);
    setTitle(name);
    setData(menuData);
  };

  const handleClose = () => {
    setopen(null);
  };
  return (
    <header className={classes.root}>
      <div className={classes.logoContainer}>
        <p className={classes.logo}>LS CLASSES</p>
      </div>
      <div className={classes.avatarContainer}>
        <i
          class={`far fa-bell ${classes.icons}`}
          aria-describedby={'bell-icon'}
          onClick={e => handleClick(e, 'Notifications', notifications)}
        ></i>
        <i
          class={`far fa-calendar-alt ${classes.icons}`}
          aria-describedby={'calendar'}
          onClick={e => handleClick(e, 'Agenda', agenda)}
        ></i>
        <CustomAvatar className={classes.avatar} />
        <span className={classes.name}>John Doe</span>
        <CustomPopOver
          ID={title}
          isOpen={open}
          handleClose={handleClose}
          title={title}
          items={data}
        ></CustomPopOver>
      </div>
    </header>
  );
};

export default Header;
