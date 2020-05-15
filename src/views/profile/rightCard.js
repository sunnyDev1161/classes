import React from 'react';
import InputCard from 'src/layouts/inputCard';
import CustomButton from 'src/layouts/button';
const RightCard = props => {
  const { classes } = props;
  const data = [1, 2, 3, 4, 5];
  return (
    <InputCard
      containerClass={classes.inputContainer + ' ' + 'leftRightCards'}
      className={classes.cards}
    >
      <p className={classes.profileText}>Profile</p>
      <div>
        <input
          name="name"
          type="text"
          value=""
          className={classes.input + ' ' + classes.fullInput}
          autoComplete={'off'}
          placeholder={'Name'}
        />
      </div>
      <div className={classes.root}>
        <input
          name="name"
          type="text"
          value=""
          className={classes.input}
          autoComplete={'off'}
          placeholder={'Name'}
        />
        <input
          name="name"
          type="text"
          value=""
          className={classes.input}
          autoComplete={'off'}
          placeholder={'Name'}
        />
      </div>
      <div className={classes.root}>
        <input
          name="name"
          type="text"
          value=""
          className={classes.input}
          autoComplete={'off'}
          placeholder={'Name'}
        />
        <input
          name="name"
          type="text"
          value=""
          className={classes.input}
          autoComplete={'off'}
          placeholder={'Name'}
        />
      </div>
      <CustomButton title="SAVE" className={classes.saveBtn} />
      <div>
        {' '}
        <p className={classes.profileText}>Change password</p>
        <input
          name="name"
          type="password"
          value=""
          className={classes.input + ' ' + classes.fullInput}
          autoComplete={'off'}
          placeholder={'Password'}
        />
        <input
          name="name"
          type="password"
          value=""
          className={classes.input + ' ' + classes.fullInput}
          autoComplete={'off'}
          placeholder={'Confirm Password'}
        />
        <CustomButton title="SAVE" className={classes.saveBtn} />
      </div>
    </InputCard>
  );
};

export default RightCard;
