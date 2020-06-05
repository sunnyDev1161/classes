import React, { useState } from 'react';
import CustomCheckbox from 'src/layouts/checkbox';
import { makeStyles } from '@material-ui/core';
import { THEMES } from 'src/constants';
import CustomModal from 'src/layouts/modal';
import student from 'src/assets/images/student.png';
import CustomAvatar from 'src/layouts/avatar';
import CustomButton from 'src/layouts/button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 10px'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '10px 0',
    borderBottom: `1px solid ${THEMES.BORDER_COLOR}`
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: '40px',
    height: '40px',
    margin: '0 5px',
    background: `url(${student})`,
    backgroundSize: 'cover'
  },
  name: {
    fontSize: '12px',
    color: 'black'
  },
  email: {
    color: THEMES.GRAYFONT,
    fontSize: '10px'
  },
  emailContainer: {
    marginLeft: '5px',
    lineHeight: '12px'
  },
  icon: {
    padding: '5px',
    borderRadius: '4px',
    color: THEMES.GRAYFONT,
    background: '#ededed',
    margin: '4px'
  },
  modalText: {
    fontSize: '11px',
    color: THEMES.GRAYFONT,
    marginTop: '10px'
  },
  btnsContainer: {
    float: 'right',
    marginTop: '30px',
    display: 'flex'
  },
  btns: {
    marginLeft: '10px'
  }
}));
const StudentsList = props => {
  const data = ['1', '2', '3', '4', '5', '6'];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomCheckbox label={'All'} />
      {data.length > 0
        ? data.map((val, index) => {
            return <Users key={index} classes={classes} />;
          })
        : ''}
    </div>
  );
};

export default StudentsList;

const Users = props => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = e => setModalOpen(false);
  const onDeleteStudentClick = e => {
    setModalOpen(true);
  };
  const { classes = '', key = '' } = props;
  return (
    <>
      <div className={classes.flex} key={key}>
        <div className={classes.avatarContainer}>
          <CustomCheckbox />
          <CustomAvatar className={classes.avatar} />
          <div className={classes.emailContainer}>
            <p className={classes.name}>David j abbey</p>
            <p className={classes.email}>hello@gmail.com</p>
          </div>
        </div>
        <div>
          <i className={`fas fa-clock ${classes.icon}`} />
          <i
            className={`fas fa-trash-alt ${classes.icon}`}
            onClick={onDeleteStudentClick}
          />
        </div>
      </div>
      <CustomModal
        open={modalOpen}
        handleClose={handleModalClose}
        title="Delete Student"
      >
        <p className={classes.modalText}>
          Are you sure you want to remove "Methew" student from this class?
        </p>
        <div className={classes.btnsContainer}>
          <CustomButton
            title="CANCEL"
            black={true}
            className={classes.btns}
            onClick={e => setModalOpen(false)}
          />
          <CustomButton
            title="CONFIRM"
            yellow={true}
            className={classes.btns}
          />
        </div>
      </CustomModal>
    </>
  );
};
