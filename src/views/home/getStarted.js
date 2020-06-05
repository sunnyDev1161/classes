import React from 'react';
import GetStartedCard from 'src/layouts/getStartedCard';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import CustomAvatar from 'src/layouts/avatar';
import { dashBoard } from 'src/theme';

const useStyles = makeStyles(theme => ({
  flexBox: { display: 'flex', justifyContent: 'space-between' },
  normalText: { ...dashBoard.normalText, margin: '20px 0' },
  lastCard: { maxWidth: '240px' },
  avatar: { marginTop: '50px', width: '70px', height: '70px' }
}));

const GetStarted = props => {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.normalText}>Get Started</p>
      <div className={classes.flexBox + ' ' + 'displayBlock'}>
        <GetStartedCard des={'CREATE A CLASS'}>
          <CustomAvatar className={classes.avatar} />
        </GetStartedCard>
        <GetStartedCard des={'CREATE A LESSON'}>
          <CustomAvatar className={classes.avatar} />
        </GetStartedCard>
        <GetStartedCard className={classes.lastCard} des={'UPLOAD A FILE'}>
          <CustomAvatar className={classes.avatar} />
        </GetStartedCard>
      </div>
    </div>
  );
};

export default GetStarted;
