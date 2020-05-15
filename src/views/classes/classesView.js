import React from 'react';
import { makeStyles } from '@material-ui/core';
import DashboardHeader from 'src/layouts/dashboardHeader';
import NoDataCard from 'src/layouts/nodataCard';
import { NoDataCardTheme } from 'src/theme';
import ClassCard from 'src/layouts/classCard';
import office from 'src/assets/images/office.png';
import CustomAvatar from 'src/layouts/avatar';
import { THEMES } from 'src/constants';
import CustomButton from 'src/layouts/button';
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
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  flex1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flex2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10px 0',
    lineHeight: '18px'
  },
  avatar: {
    width: '30px',
    height: '30px',
    border: 'none',
    background: THEMES.YELLOW_BTN,
    margin: '0'
  },
  blackText: {
    fontSize: THEMES.REGULARFONT,
    color: 'black'
  },
  classText: { marginLeft: '5px' },
  headings: {
    fontSize: '9px',
    color: THEMES.GRAYFONT
  },
  accBtn: {
    fontSize: '10px',
    color: 'black',
    background: THEMES.YELLOW_BTN
  }
}));
const ClassesView = props => {
  const classes = useStyles();
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return (
    <>
      <DashboardHeader
        pageTitle={'My Classes'}
        pageTitleBold={'Classes'}
        yellowBtnTitle={'CREATE A CLASS'}
      />
      <div className={classes.flex + ' ' + 'displayBlock'}>
        {data.length > 0 ? (
          data.map(val => {
            return (
              <ClassCard key={val}>
                <div className={classes.flex1}>
                  <div className={classes.flex1}>
                    <CustomAvatar className={classes.avatar} />
                    <span
                      className={classes.blackText + ' ' + classes.classText}
                    >
                      Class one
                    </span>
                  </div>
                  <div>
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
                <div className={classes.flex2}>
                  <div className={classes.headings}>
                    <p>Estiblishment</p>
                    <p className={classes.blackText}>SS</p>
                  </div>
                  <div className={classes.headings}>
                    <p>City</p>
                    <p className={classes.blackText}>Mediona</p>
                  </div>
                  <div className={classes.headings}>
                    <p>participants</p>
                    <p className={classes.blackText}>08</p>
                  </div>
                </div>
                <CustomButton
                  title={'TO ACCESS'}
                  className={classes.accBtn + ' ' + 'fullBtn'}
                />
              </ClassCard>
            );
          })
        ) : (
          <NoDataCard>
            <div className={classes.imageContainer}></div>
            <p className={classes.noClass}>No Classes</p>
          </NoDataCard>
        )}
      </div>
    </>
  );
};

export default ClassesView;
