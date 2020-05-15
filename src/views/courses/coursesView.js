import React, { useState } from 'react';
import NoDataCard from 'src/layouts/nodataCard';
import { NoDataCardTheme } from 'src/theme';
import { makeStyles } from '@material-ui/core';
import GenericCard from 'src/layouts/genericCard';
import CustomPagination from 'src/layouts/pagination';
import office from 'src/assets/images/office.png';
import DashboardHeader from 'src/layouts/dashboardHeader';
import CustomModal from 'src/layouts/modal';
import CustomInput from 'src/layouts/inputs';
import CustomSwitch from 'src/layouts/switch';
import CustomDateTime from 'src/layouts/datepicker';
import CustomButton from 'src/layouts/button';
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
    margin: '30px 0 50px 0',
    justifyContent: 'space-between'
  },
  datePicker: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  confirm: {
    background: THEMES.YELLOW_BTN,
    float: 'right',
    width: 'fit-content'
  },
  date1: {
    marginRight: '10px'
  },
  date2: {
    marginLeft: '10px'
  }
}));

const CoursesView = props => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [classesVal, setClasses] = useState('');
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const inputData = [
    {
      name: 'courseName',
      type: 'text',
      value: courseName,
      onChange: e => setCourseName(e.target.value),
      placeHolder: 'Course Name'
    },
    {
      name: 'description',
      type: 'text',
      value: description,
      onChange: e => setDescription(e.target.value),
      placeHolder: 'Description'
    },
    {
      name: 'classes',
      type: 'select',
      value: classesVal,
      onChange: e => setClasses(e.target.value)
    }
  ];
  const onYellowBtnClick = e => setModalOpen(true);
  const handleModalClose = e => setModalOpen(false);
  return (
    <>
      <DashboardHeader
        pageTitle={'My Courses'}
        pageTitleBold={'Courses'}
        yellowBtnTitle={'CREATE A LESSON'}
        blackBtnTitle={'ARCHIVED COURSES'}
        onYellowBtnClick={onYellowBtnClick}
      />
      <div className={classes.flex + ' ' + 'genericCardWrapper'}>
        {data.length > 0 ? (
          data.map(val => {
            return <GenericCard key={val} />;
          })
        ) : (
          <NoDataCard>
            <div className={classes.imageContainer}></div>
            <p className={classes.noClass}>No Classes</p>
          </NoDataCard>
        )}
      </div>
      <CustomModal
        open={modalOpen}
        handleClose={handleModalClose}
        title="Course Creation"
      >
        <CustomInput
          inputData={inputData}
          selectTitle="Choose from your classes"
        />
        <div>
          <CustomSwitch /> <span>Start the course now</span>
        </div>
        <div className={classes.datePicker}>
          <div className={classes.date1}>
            <CustomDateTime />
          </div>
          <div className={classes.date2}>
            <CustomDateTime />
          </div>
        </div>
        <CustomButton title="Confirm" className={classes.confirm} />
      </CustomModal>
      <CustomPagination />
    </>
  );
};

export default CoursesView;
