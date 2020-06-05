import React from 'react';
import GetStartedCard from 'src/layouts/getStartedCard';
import { makeStyles } from '@material-ui/core';
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
  },
  videoIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: '#f8b62a',
    fontSize: '45px'
  },
  courseName: { fontSize: '12px' },
  courseWrapper: { padding: '20px' }
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
        >
          <i className={`far fa-play-circle ${classes.videoIcon}`}></i>
        </GetStartedCard>
        <GetStartedCard
          des={'How to start a course'}
          variant={'tutorials'}
          bottom={classes.bottomCard}
        >
          {' '}
          <i className={`far fa-play-circle ${classes.videoIcon}`}></i>
        </GetStartedCard>
        <GetStartedCard
          className={classes.lastCard}
          des={'Upload a file'}
          variant={'tutorials'}
          bottom={classes.bottomCard}
        >
          <div className={classes.courseWrapper}>
            <p className={classes.courseName}>Course Name</p>
          </div>
        </GetStartedCard>
      </div>
    </div>
  );
};

export default Tutorials;
