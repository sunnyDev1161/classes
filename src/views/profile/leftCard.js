import React from 'react';
import InputCard from 'src/layouts/inputCard';
import CustomAvatar from 'src/layouts/avatar';
import CustomInput from 'src/layouts/inputs';
import CustomButton from 'src/layouts/button';
const LeftCard = props => {
  const { classes, deleteData = [] } = props;
  return (
    <div className={classes.avatarWrapper + ' ' + 'leftRightCards'}>
      {' '}
      <InputCard
        containerClass={classes.avatarContainer}
        className={classes.cards}
      >
        <CustomAvatar className={classes.avatar} />
        <p className={classes.name}>John Doe</p>
        <p className={classes.email}>johnDoe@gmail.com</p>
        <p className={classes.email}>ss mediouna</p>
        <div className={classes.btnContainer}>
          <CustomButton className={classes.blackBtn} title={'UPLOAD'} />
          <CustomButton className={classes.yellowBtn} title={'REMOVE'} />
        </div>
      </InputCard>
      <InputCard
        containerClass={classes.avatarContainer}
        className={classes.cards}
      >
        <CustomInput inputData={deleteData} className={classes.inputs} />
        <CustomButton title={'DELETE ACCOUNT'} className={classes.yellowBtn} />
      </InputCard>
    </div>
  );
};

export default LeftCard;
