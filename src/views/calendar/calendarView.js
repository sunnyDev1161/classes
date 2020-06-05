import React from 'react';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import { dashBoard } from 'src/theme';
import DashboardHeader from 'src/layouts/dashboardHeader';
import {
  ScheduleComponent,
  Inject,
  Week,
  WorkWeek,
  Month,
  Day,
  Agenda,
  ViewsDirective,
  ViewDirective
} from '@syncfusion/ej2-react-schedule';

const useStyles = makeStyles(theme => ({}));

const CalendarView = props => {
  const { statistics = [] } = props;
  const classes = useStyles();
  return (
    <>
      <DashboardHeader pageTitle={'Calender'} pageTitleBold={'Your Program'} />

      <ScheduleComponent height="400px">
        <ViewsDirective>
          <ViewDirective option="Day" startHour="10:00" endHour="18:00" />
          <ViewDirective option="Week" startHour="07:00" endHour="15:00" />
        </ViewsDirective>
        <Inject services={[Day, Week]} />
      </ScheduleComponent>
    </>
  );
};

export default CalendarView;
