import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { THEMES } from 'src/constants';
import CustomAvatar from 'src/layouts/avatar';
const useStyles = makeStyles(theme => ({
  titleContainer: {
    position: 'absolute',
    top: '0',
    width: '100%',
    background: THEMES.YELLOW_BTN,
    padding: '10px 5px',
    fontSize: '10px'
  },
  content: { padding: '30px 5px 10px 5px' },
  avt: {
    width: '30px',
    height: '30px',
    background: THEMES.YELLOW_BTN,
    backgroundSize: 'cover',
    borderColor: THEMES.YELLOW_BTN,
    margin: '0 0'
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: `1px solid ${THEMES.BORDER_COLOR}`
  },
  smallText: {
    fontSize: '10px'
  },
  normalText: { fontSize: '12px', fontWeight: 'bold' },
  minutesText: { fontSize: '9px', fontWeight: 'bold', color: THEMES.GRAYFONT },
  textContainer: { marginLeft: '8px' }
}));

export default function CustomPopOver(props) {
  const classes = useStyles();
  const {
    ID,
    isOpen,
    handleClick,
    handleClose,
    title = '',
    items = []
  } = props;

  const open = Boolean(isOpen);
  const id = open ? ID : undefined;
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        {' '}
        <div className={classes.titleContainer}>
          <span>{title}</span>
        </div>
        <div className={classes.content}>
          {items.map((val, index) => {
            return (
              <div className={classes.menu} key={val.id}>
                <CustomAvatar className={classes.avt} />
                <div className={classes.textContainer}>
                  <p className={classes.smallText}>
                    {val.desc}
                    {val.user && (
                      <span className={classes.normalText}>{val.user}</span>
                    )}
                  </p>
                  <p className={classes.minutesText}>{val.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Popover>
    </div>
  );
}
