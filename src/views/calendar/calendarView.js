import React from 'react';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import { dashBoard } from 'src/theme';
import DashboardHeader from 'src/layouts/dashboardHeader';

const useStyles = makeStyles(theme => ({}));

const CalendarView = props => {
  const { statistics = [] } = props;
  const classes = useStyles();
  return (
    <>
      <DashboardHeader pageTitle={'Calender'} pageTitleBold={'Your Program'} />)
    </>
  );
};

export default CalendarView;
