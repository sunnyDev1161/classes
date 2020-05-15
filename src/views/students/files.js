import React from 'react';
import NoDataCard from 'src/layouts/nodataCard';
import { makeStyles } from '@material-ui/core';
import { NoDataCardTheme } from 'src/theme';
import GenericCard from 'src/layouts/genericCard';
import office from 'src/assets/images/office.png';
import { THEMES } from 'src/constants';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    ...NoDataCardTheme.imageContainer,
    background: `url(${office})`
  },
  noClass: {
    fontSize: '24px',
    textAlign: 'center',
    marginTop: '10px',
    color: 'black'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '30px 0 70px 0',
    justifyContent: 'space-between'
  },
  activeBtn: {
    background: THEMES.YELLOW_BTN,
    color: 'white'
  }
}));
const GenericFilesLayout = props => {
  const classes = useStyles();
  const { data = [], variant = '' } = props;
  return (
    <div className={classes.flex + ' ' + 'genericCardWrapper'}>
      {data.length > 0 ? (
        data.map(val => {
          return <GenericCard key={val} variant={variant} />;
        })
      ) : (
        <NoDataCard>
          <div className={classes.imageContainer}></div>
          <p className={classes.noClass}>No Classes</p>
        </NoDataCard>
      )}
    </div>
  );
};

export default GenericFilesLayout;
