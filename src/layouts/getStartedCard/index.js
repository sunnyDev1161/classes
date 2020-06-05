import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import { getStartedCard } from 'src/theme';
const useStyles = makeStyles(theme => ({
  card: getStartedCard.card,
  bottomCard: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    background: THEMES.YELLOW_BTN,
    padding: '8px',
    fontSize: THEMES.REGULARFONT,
    color: 'black'
  },
  btn: {
    border: 'none',
    outLine: 'none',
    background: 'transparent'
  }
}));

const GetStartedCard = props => {
  const classes = useStyles();
  const { className = '', key = '', variant = '', bottom = '' } = props;
  return (
    <Card
      key={key}
      className={classes.card + ' ' + className + ' ' + 'getStartedCard'}
    >
      {props.children}
      <div
        className={
          variant === 'tutorials'
            ? classes.bottomCard + ' ' + bottom
            : classes.bottomCard
        }
      >
        <spna>{props.des}</spna>
        {variant === 'tutorials' ? (
          ''
        ) : (
          <i className={`fas fa-angle-double-right ${classes.btn}`} />
        )}
      </div>
    </Card>
  );
};

export default GetStartedCard;
