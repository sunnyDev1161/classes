import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { NoDataCardTheme } from 'src/theme';
const useStyles = makeStyles(theme => ({
  card: {
    ...NoDataCardTheme.card
  }
}));

const NoDataCard = props => {
  const classes = useStyles();
  const { className = '', data = '' } = props;
  return (
    <Card className={classes.card + ' ' + className}>{props.children}</Card>
  );
};

export default NoDataCard;
