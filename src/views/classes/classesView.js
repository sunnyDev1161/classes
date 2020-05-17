import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import DashboardHeader from 'src/layouts/dashboardHeader';
import NoDataCard from 'src/layouts/nodataCard';
import { NoDataCardTheme } from 'src/theme';
import ClassCard from 'src/layouts/classCard';
import office from 'src/assets/images/office.png';
import CustomAvatar from 'src/layouts/avatar';
import { THEMES } from 'src/constants';
import CustomButton from 'src/layouts/button';
import CustomInput from 'src/layouts/inputs';
import CustomSwitch from 'src/layouts/switch';
import CustomModal from 'src/layouts/modal';

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
  },
  notice: { fontSize: '9px', color: THEMES.GRAYFONT },
  modalBtns: {
    background: THEMES.YELLOW_BTN,
    width: 'fit-content',
    float: 'right',
    padding: '9px 30px',
    color: 'black'
  },
  modalHeaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  headerMenu: {
    display: 'flex',
    alignItems: 'center',
    flex: '1'
  },
  modalHeaderText: {
    fontSize: '16px',
    fontWeight: '400',
    marginLeft: '6px'
  },

  emailContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxHeight: '200px',
    overflow: 'auto',
    height: '124px',
    margin: '20px 0 10px 0'
  },
  allEmails: {
    fontSize: '10px',
    padding: '5px 10px',
    color: THEMES.GRAYFONT,
    border: `1px solid ${THEMES.GRAYFONT}`,
    borderRadius: '30px',
    margin: '4px 10px 4px 0'
  },
  studentInputs: { width: '200px', marginRight: '10px' },
  downloadText: {
    color: THEMES.GRAYFONT,

    fontSize: '13px'
  },
  borderContainer: {
    padding: '10px 0',
    borderTop: `0.07px solid ${THEMES.BORDER_COLOR}`
  },
  icons: {
    fontSize: '22px',
    marginTop: '10px',
    color: 'silver'
  },
  downloadWrapper: { textAlign: 'center' },
  addIcon: {
    color: THEMES.YELLOW_BTN,
    fontSize: '24px'
  },
  addText: {
    fontSize: '13px',
    marginLeft: '8px'
  }
}));

const ModalHeader = props => {
  const classes = useStyles();
  return (
    <div className={classes.modalHeaderWrapper}>
      <div className={classes.headerMenu}>
        <CustomAvatar className={classes.avatar} />
        <span className={classes.modalHeaderText}>
          Class Creation <i className="fas fa-angle-double-right"></i>
        </span>
      </div>
      <div className={classes.headerMenu}>
        <CustomAvatar className={classes.avatar} />
        <span className={classes.modalHeaderText}>Adding Students</span>
      </div>
    </div>
  );
};
const ClassesView = props => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNextBtn, setModalNextBtn] = useState(false);
  const [className, setClassName] = useState('');
  const [establishment, setEstablishment] = useState('');
  const [city, setCity] = useState('');

  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const selectMenu = [
    { value: '', text: 'City', id: 1 },
    { value: 'New York', text: 'New York', id: 2 },
    { value: 'Los Vegas', text: 'Los vegas', id: 3 },
    { value: 'Los Vegas', text: 'Los vegas', id: 3 },
    { value: 'Los Vegas', text: 'Los vegas', id: 3 },
    { value: 'Los Vegas', text: 'Los vegas', id: 3 },
    { value: 'Los Vegas', text: 'Los vegas', id: 3 },
    { value: 'Los Vegas', text: 'Los vegas', id: 3 }
  ];
  const inputData = [
    {
      name: 'courseName',
      type: 'text',
      value: className,
      onChange: e => setClassName(e.target.value),
      placeHolder: 'Class Name'
    },
    {
      name: 'establishment',
      type: 'text',
      value: establishment,
      onChange: e => setEstablishment(e.target.value),
      placeHolder: 'Establishment'
    },
    {
      name: 'classes',
      type: 'select',
      value: city,
      onChange: e => setCity(e.target.value)
    }
  ];

  const studentsData = [
    {
      name: 'courseName',
      type: 'text',
      value: className,
      onChange: e => setClassName(e.target.value),
      placeHolder: 'Full Name '
    },
    {
      name: 'establishment',
      type: 'text',
      value: establishment,
      onChange: e => setEstablishment(e.target.value),
      placeHolder: 'Email Address'
    }
  ];
  const onYellowBtnClick = e => setModalOpen(true);
  const handleModalClose = e => setModalOpen(false);
  const onNextBtnClick = e => setModalNextBtn(true);
  return (
    <>
      <DashboardHeader
        pageTitle={'My Classes'}
        pageTitleBold={'Classes'}
        yellowBtnTitle={'CREATE A CLASS'}
        onYellowBtnClick={onYellowBtnClick}
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
        <CustomModal
          open={modalOpen}
          handleClose={handleModalClose}
          title={<ModalHeader />}
        >
          {modalNextBtn ? (
            <>
              <div
                className={classes.modalHeaderWrapper}
                style={{ marginBottom: '10px' }}
              >
                <CustomInput
                  inputData={studentsData}
                  className={classes.studentInputs}
                />
              </div>
              <div className={classes.flex1 + ' ' + classes.borderContainer}>
                <CustomSwitch />
                <div className={classes.downloadWrapper}>
                  <p className={classes.downloadText}>Download Example CSV</p>
                  <i
                    className={`fas fa-cloud-download-alt ${classes.icons}`}
                  ></i>
                </div>
              </div>
              <div className={classes.flex1 + ' ' + classes.borderContainer}>
                <div className={classes.flex1}>
                  {' '}
                  <i className={`fas fa-plus-circle ${classes.addIcon}`}></i>
                  <span className={classes.addText}>Upload Students CSV</span>
                </div>
                <CustomButton title="UPLOAD" className={classes.modalBtns} />
              </div>
              <div className={classes.borderContainer}>
                <span className={classes.notice}>
                  These Students will receive the invitation in their email
                  addresses. profile
                </span>
              </div>
              <div className={classes.emailContainer}>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
                <span className={classes.allEmails}>
                  harrymalshor@teleworm.com
                </span>
              </div>
            </>
          ) : (
            <>
              <CustomInput inputData={inputData} selectMenu={selectMenu} />
              <span className={classes.notice}>
                * By default the class takes the city and estibleses your
                profile
              </span>
            </>
          )}
          <div className={classes.btnContainer}>
            <CustomButton
              title="Next"
              className={classes.modalBtns}
              onClick={onNextBtnClick}
            />
          </div>
        </CustomModal>
      </div>
    </>
  );
};

export default ClassesView;
