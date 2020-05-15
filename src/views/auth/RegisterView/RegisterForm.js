import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import InputCard from 'src/layouts/inputCard';
import CustomAvatar from 'src/layouts/avatar';
import CustomeInput from 'src/layouts/inputs';
import CustomButton from 'src/layouts/button';
import student from 'src/assets/images/student.png';
import teacher from 'src/assets/images/teacher.png';
import { THEMES } from 'src/constants';
import { inputTheme, form } from 'src/theme';

const useStyles = makeStyles(theme => ({
  form: form.form,
  avatar_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar_container: {
    margin: '12px'
  },
  student: { background: `url(${student})`, backgroundSize: 'cover' },
  teacher: { background: `url(${teacher})`, backgroundSize: 'cover' },
  afterClick: {
    border: `3px solid ${THEMES.YELLOW_TEXT}`
  },
  title: {
    fontSize: THEMES.REGULARFONT,
    color: THEMES.BLACK_TEXT
  },
  registration: {
    color: THEMES.BLACK_TEXT,
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: '600',
    margin: '6px 0'
  },
  createAcc: {
    fontSize: '11px',
    color: THEMES.GRAYFONT,
    marginBottom: '10px'
  },
  signUpBtn: { ...inputTheme.formBtn, background: THEMES.YELLOW_BTN },
  policy: {
    color: THEMES.BLACK_TEXT,
    color: '#262525',
    fontSize: '8px',
    margin: '4px 22px',
    textAlign: 'left',
    lineHeight: '12px'
  },
  link: {
    color: THEMES.YELLOW_TEXT
  },
  already: {
    color: THEMES.GRAYFONT,
    fontSize: THEMES.REGULARFONT
  }
}));

const RegisterForm = props => {
  const [showStudent, setStudent] = useState(true);
  const [showTeacher, setTeacher] = useState(false);
  const [fName, setfName] = useState('');
  const [est, setEst] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  const classes = useStyles();
  const { inputData } = props;

  const teacherData = [
    {
      name: 'fName',
      type: 'text',
      value: fName,
      onChange: e => setfName(e.target.value),
      placeHolder: 'FULL NAME',
      id: 1,
      icon: 'far fa-envelope'
    },
    {
      name: 'est',
      type: 'text',
      value: est,
      onChange: e => setEst(e.target.value),
      placeHolder: 'ESTABLISHMENT',
      id: 5,
      icon: 'far fa-envelope'
    },
    {
      name: 'phone',
      type: 'number',
      value: phone,
      onChange: e => setPhone(e.target.value),
      placeHolder: 'PHONE NUMBER',
      id: 5,
      icon: 'far fa-envelope'
    },
    {
      name: 'establishment',
      type: 'text',
      value: city,
      onChange: e => setCity(e.target.value),
      placeHolder: 'CHOOSE A CITY',
      id: 6,
      icon: 'far fa-envelope'
    },
    {
      name: 'email',
      type: 'email',
      value: email,
      onChange: e => setemail(e.target.value),
      placeHolder: 'EMAIL ADDRESS',
      id: 2,
      icon: 'far fa-envelope'
    },
    {
      name: 'password',
      type: 'password',
      value: password,
      onChange: e => setPassword(e.target.value),
      placeHolder: 'PASSWORD',
      id: 3,
      icon: 'fas fa-unlock-alt'
    },
    {
      name: 'cpassword',
      type: 'password',
      value: cPassword,
      onChange: e => setCpassword(e.target.value),
      placeHolder: 'CONFIRM PASSWORD',
      id: 3,
      icon: 'fas fa-unlock-alt'
    }
  ];
  const onStudentClick = e => {
    setStudent(true);
    setTeacher(false);
  };
  const onTeacherClick = e => {
    setStudent(false);
    setTeacher(true);
  };
  return (
    <Fragment>
      <InputCard className={classes.form}>
        <p className={classes.registration}>Registration</p>
        <p className={classes.createAcc}>Creation of your user account</p>
        <div className={classes.avatar_wrapper}>
          <div className={classes.avatar_container}>
            {' '}
            <CustomAvatar
              className={
                showStudent
                  ? classes.afterClick + ' ' + classes.student
                  : classes.student
              }
              onClick={onStudentClick}
            />
            <span className={classes.title}>Student</span>
          </div>
          <div className={classes.avatar_container}>
            <CustomAvatar
              className={
                showTeacher
                  ? classes.afterClick + ' ' + classes.teacher
                  : classes.teacher
              }
              onClick={onTeacherClick}
            />
            <span className={classes.title}>Teacher</span>
          </div>
        </div>
        {showTeacher ? (
          <CustomeInput inputData={teacherData} />
        ) : (
          <CustomeInput inputData={inputData} />
        )}
        <p className={classes.policy}>
          By clicking on the 'Create My Account' button, you indicate that you
          have read and accepted the{' '}
          <Link to="/policy" className={classes.link}>
            <a>General condition of Use.</a>
          </Link>
        </p>
        <CustomButton
          type=""
          title="CREATE MY ACCOUNT"
          className={classes.signUpBtn}
        />
        <Link to="/login" className={classes.already}>
          <a>Already have an account?</a>
        </Link>
      </InputCard>
    </Fragment>
  );
};

export default RegisterForm;
