import React from 'react';
import { makeStyles } from '@material-ui/core';
import InputCard from 'src/layouts/inputCard';
import CustomeInput from 'src/layouts/inputs';
import CustomButton from 'src/layouts/button';
import { THEMES } from 'src/constants';
import CustomAvatar from 'src/layouts/avatar';
import { inputTheme, formLogo, form } from 'src/theme';

const useStyles = makeStyles(theme => ({
  form: form.form,
  logo: formLogo.logo,
  forgot: {
    color: THEMES.BLACK_TEXT,
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: '600',
    margin: '6px 0'
  },
  link: {
    fontSize: '11px',
    color: THEMES.GRAYFONT,
    marginBottom: '10px'
  },
  confirm: { ...inputTheme.formBtn, background: THEMES.YELLOW_BTN },
  avatar: { margin: '20px auto' }
}));
const ForgotForm = props => {
  const classes = useStyles();
  const { inputData = [], newPassword = [] } = props;
  return (
    <>
      <InputCard className={classes.form}>
        <p className={classes.logo}>LS CLASSES</p>
        <CustomAvatar className={classes.avatar} />
        <p className={classes.forgot}>FORGOT YOUR PASSWORD</p>
        <p className={classes.link}>
          Please enter the email address associated with you Laclasse <br></br>
          to reaceive the password reset link.
        </p>
        {1 === 1 ? (
          <CustomeInput inputData={inputData} />
        ) : (
          <CustomeInput inputData={newPassword} />
        )}
        <CustomButton
          type="submit"
          title="Confirm"
          className={classes.confirm}
        />
      </InputCard>
    </>
  );
};

export default ForgotForm;
