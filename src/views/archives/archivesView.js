import React from 'react';
import NoDataCard from 'src/layouts/nodataCard';
import { NoDataCardTheme } from 'src/theme';
import { makeStyles } from '@material-ui/core';
import GenericCard from 'src/layouts/genericCard';
import office from 'src/assets/images/office.png';
import DashboardHeader from 'src/layouts/dashboardHeader';
import CustomPagination from 'src/layouts/pagination';
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
    margin: '30px 0 50px 0',
    justifyContent: 'space-between'
  }
}));
const ArchivesView = props => {
  const classes = useStyles();
  const data = ['1', '2', '3', '4', '5', '6'];
  return (
    <>
      <DashboardHeader pageTitle={'My Archives'} pageTitleBold={'Archives'} />
      <div className={classes.flex + ' ' + 'genericCardWrapper'}>
        {data.length > 0 ? (
          data.map(val => {
            return <GenericCard key={val} variant="archives" />;
          })
        ) : (
          <NoDataCard>
            <div className={classes.imageContainer}></div>
            <p className={classes.noClass}>No Classes</p>
          </NoDataCard>
        )}
      </div>
      <CustomPagination />
    </>
  );
};

export default ArchivesView;
