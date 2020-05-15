import React from 'react';
import GetStartedCard from 'src/layouts/getStartedCard';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import CustomAvatar from 'src/layouts/avatar';
import { dashBoard } from 'src/theme';

const useStyles = makeStyles(theme => ({
  flexBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '50px'
  },
  normalText: { ...dashBoard.normalText, margin: '20px 0' },
  lastCard: { maxWidth: '240px' },
  bottomCard: {
    background: 'black',
    color: '#fff'
  }
}));

const Tutorials = props => {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.normalText}>Tutorials</p>
      <div className={classes.flexBox + ' ' + 'displayBlock'}>
        <GetStartedCard
          des={'How to use the plateform'}
          variant={'tutorials'}
          bottom={classes.bottomCard}
        ></GetStartedCard>
        <GetStartedCard
          des={'How to start a course'}
          variant={'tutorials'}
          bottom={classes.bottomCard}
        ></GetStartedCard>
        <GetStartedCard
          className={classes.lastCard}
          des={'Upload a file'}
          variant={'tutorials'}
          bottom={classes.bottomCard}
        ></GetStartedCard>
      </div>
    </div>
  );
};

export default Tutorials;
