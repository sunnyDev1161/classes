import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import InputCard from 'src/layouts/inputCard';
import CustomeInput from 'src/layouts/inputs';
import CustomButton from 'src/layouts/button';
import { THEMES } from 'src/constants';
import { inputTheme, formLogo, form } from 'src/theme';

const useStyles = makeStyles(theme => ({
  form: form.form,
  logo: formLogo.logo,
  signIn: {
    color: THEMES.BLACK_TEXT,
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: '600',
    margin: '6px 0'
  },
  signInAcc: {
    fontSize: '11px',
    color: THEMES.GRAYFONT,
    marginBottom: '10px'
  },
  signInBtn: { ...inputTheme.formBtn, background: THEMES.BLACK_BTN },
  signUpBtn: { ...inputTheme.formBtn, background: THEMES.YELLOW_BTN },
  forgot: {
    textDecoration: 'none',
    fontSize: '11px',
    color: THEMES.GRAYFONT,
    display: 'block'
  },
  dntHaveAcc: {
    textTransform: 'uppercase',
    color: THEMES.BLACK_TEXT,
    fontSize: '14px',
    margin: '20px 0 0 0'
  }
}));
const LoginForm = props => {
  const classes = useStyles();
  const { inputData } = props;
  return (
    <>
      <InputCard className={classes.form}>
        <p className={classes.logo}>LS CLASSES</p>
        <p className={classes.signIn}>sign in</p>
        <p className={classes.signInAcc}>Sign in to your account</p>
        <CustomeInput inputData={inputData} />
        <CustomButton
          type="submit"
          title="Sign In"
          className={classes.signInBtn}
        />
        <Link to="/forgot-password" className={classes.forgot}>
          <a>Forgot Password?</a>
        </Link>
        <p className={classes.dntHaveAcc}>You do not have an account?</p>
        <CustomButton type="" title="Sign Up" className={classes.signUpBtn} />
      </InputCard>
    </>
  );
};

export default LoginForm;
