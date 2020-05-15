import React from 'react';
import { Container, Card, makeStyles } from '@material-ui/core';
import { cardTheme } from 'src/theme';
const useStyles = makeStyles(theme => ({
  card: cardTheme.card
}));

const InputCard = props => {
  const classes = useStyles();
  const { className = '', containerClass = '' } = props;
  return (
    <Container className={containerClass}>
      <Card className={classes.card + ' ' + className + ' ' + 'inputCard'}>
        {props.children}
      </Card>
    </Container>
  );
};

export default InputCard;
