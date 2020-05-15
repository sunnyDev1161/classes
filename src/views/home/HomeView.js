import React from 'react';
import { makeStyles } from '@material-ui/core';
import StatisticsCard from 'src/layouts/statisticsCard';
import CustomAvatar from 'src/layouts/avatar';
import GetStarted from './getStarted';
import { THEMES } from 'src/constants';
import Tutorials from './tutorials';
import { dashBoard } from 'src/theme';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', justifyContent: 'space-between' },
  normalText: { ...dashBoard.normalText, margin: '20px 0' },
  largeText: { ...dashBoard.largeText, margin: '20px 0' },

  avatar: {
    width: '50px',
    height: '50px',
    border: 'none',
    background: THEMES.YELLOW_BTN
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  descContainer: { flex: 4 },
  courses: {
    fontSize: '11px',
    color: THEMES.GRAYFONT
  },
  qty: {
    fontSize: '19px',
    color: 'black',
    marginTop: '4px'
  }
}));

const HomeView = props => {
  const { statistics = [] } = props;
  const classes = useStyles();
  return (
    <>
      <p className={classes.largeText}>Wellcome John Doe</p>
      <p className={classes.normalText}>Statistics</p>
      <div className={classes.root + ' ' + 'statisticsContainer'}>
        {statistics.map((val, index) => {
          return (
            <StatisticsCard key={val.id}>
              <div className={classes.cardContent} key={val.id}>
                <div className={classes.descContainer}>
                  {' '}
                  <p className={classes.courses}>{val.desc}</p>
                  <p className={classes.qty}>{val.qty}</p>
                </div>
                <CustomAvatar className={classes.avatar} />
              </div>
            </StatisticsCard>
          );
        })}
      </div>
      <GetStarted />
      <Tutorials />
    </>
  );
};

export default HomeView;
