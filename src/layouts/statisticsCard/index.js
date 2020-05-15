import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { statisticsCard } from 'src/theme';
const useStyles = makeStyles(theme => ({
  card: statisticsCard.card
}));

const StatisticsCard = props => {
  const classes = useStyles();
  const { className = '', key = '' } = props;
  return (
    <Card
      key={key}
      className={classes.card + ' ' + className + ' ' + 'statisticsCard'}
    >
      {props.children}
    </Card>
  );
};

export default StatisticsCard;
