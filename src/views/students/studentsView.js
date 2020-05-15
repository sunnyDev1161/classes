import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import DashboardHeader from 'src/layouts/dashboardHeader';
import FullWidthCard from 'src/layouts/fullWidthCard';
import ButtonsContainer from './buttonsContainer';
import NoDataCard from 'src/layouts/nodataCard';
import office from 'src/assets/images/office.png';
import { NoDataCardTheme } from 'src/theme';
import GenericCard from 'src/layouts/genericCard';
import StudentsList from './studentsList';
import { THEMES } from 'src/constants';
import GenericFilesLayout from './files';

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
    margin: '30px 0 70px 0'
  },
  activeBtn: {
    background: THEMES.YELLOW_BTN,
    color: 'white'
  }
}));
const StudentsView = props => {
  const [showStudent, setShowStudent] = useState(true);
  const [showClasses, setShowClasses] = useState(false);
  const [showArchives, setShowArchives] = useState(false);
  const [showFiles, setShowFiles] = useState(false);
  const classes = useStyles();
  const data = ['1', '2', '3', '4', '5', '6'];
  const archivesData = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const onStudentsClick = e => {
    setShowStudent(true);
    setShowClasses(false);
    setShowArchives(false);
    setShowFiles(false);
  };
  const onClassesClick = e => {
    setShowStudent(false);
    setShowClasses(true);
    setShowArchives(false);
    setShowFiles(false);
  };
  const onArchivesClick = e => {
    setShowStudent(false);
    setShowClasses(false);
    setShowArchives(true);
    setShowFiles(false);
  };
  const onFilesClick = e => {
    setShowStudent(false);
    setShowClasses(false);
    setShowArchives(false);
    setShowFiles(true);
  };
  // render
  return (
    <>
      <DashboardHeader
        pageTitle={'Students'}
        pageTitleBold={'List of Students'}
        yellowBtnTitle={'ADD'}
        variant="students"
      />
      <FullWidthCard>
        <ButtonsContainer
          onStudentsClick={onStudentsClick}
          onArchivesClick={onArchivesClick}
          onClassesClick={onClassesClick}
          onFilesClick={onFilesClick}
          btn1={showStudent}
          btn2={showClasses}
          btn3={showArchives}
          btn4={showFiles}
          className={classes.activeBtn}
        />
        {showStudent ? (
          <>
            <StudentsList />{' '}
          </>
        ) : showClasses ? (
          <>
            {' '}
            <div className={classes.flex + ' ' + 'displayBlock'}>
              {data.length > 0 ? (
                data.map(val => {
                  return <GenericCard key={val} className="genericCard" />;
                })
              ) : (
                <NoDataCard>
                  <div className={classes.imageContainer}></div>
                  <p className={classes.noClass}>No Classes</p>
                </NoDataCard>
              )}
            </div>
          </>
        ) : showArchives ? (
          <>
            {' '}
            <div className={classes.flex}>
              {archivesData.length > 0 ? (
                archivesData.map(val => {
                  return <GenericCard key={val} variant={'studentArchives'} />;
                })
              ) : (
                <NoDataCard>
                  <div className={classes.imageContainer}></div>
                  <p className={classes.noClass}>No Classes</p>
                </NoDataCard>
              )}
            </div>
          </>
        ) : (
          <>
            <GenericFilesLayout data={data} variant={'studentsFile'} />
          </>
        )}
      </FullWidthCard>
    </>
  );
};

export default StudentsView;
