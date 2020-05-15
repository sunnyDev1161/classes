import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import { fullWidthCardTheme } from 'src/theme';
const useStyles = makeStyles(theme => ({
  card: fullWidthCardTheme.card
}));

const FullWidthCard = props => {
  const classes = useStyles();
  const { className = '' } = props;
  return (
    <Card className={classes.card + ' ' + className}>{props.children}</Card>
  );
};

export default FullWidthCard;
