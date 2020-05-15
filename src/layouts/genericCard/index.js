import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { genericCard } from 'src/theme';
import { THEMES } from 'src/constants';
import CustomAvatar from 'src/layouts/avatar';
import CustomButton from 'src/layouts/button';
const useStyles = makeStyles(theme => ({
  card: genericCard.card,
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '7px',
    borderBottom: `1px solid ${THEMES.BORDER_COLOR}`
  },
  flex1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  createdBy: { fontSize: '8px', color: THEMES.GRAYFONT },

  iconWrapper: {
    padding: '8px 18px 8px 5px',
    borderBottom: `1px solid ${THEMES.BORDER_COLOR}`,
    display: 'flex',
    alignItems: 'center'
  },

  icon: {
    color: THEMES.GRAYFONT,
    marginRight: '5px'
  },
  fontColor: { color: THEMES.GRAYFONT },
  clockText: { fontSize: THEMES.REGULARFONT },
  paperText: { fontSize: '8px' },
  linkText: { fontSize: '7px' },
  grayBtnsWrapper: { display: 'flex', alignItems: 'center', padding: '7px 0' },
  grayBtns: {
    borderRadius: '0',
    background: THEMES.BORDER_COLOR,
    color: 'black',
    fontSize: '8px',
    color: 'black',
    margin: '0 2px',
    padding: '7px'
  },
  startBtn: {
    fontSize: '10px',
    color: 'black',
    background: THEMES.YELLOW_BTN,
    width: '90%',
    marginRight: '2px'
  },
  downloadBtn: {
    fontSize: '10px',
    color: 'white',
    background: THEMES.BLACK_BTN,
    width: '90%',
    marginLeft: '2px'
  }
}));

const GenericCard = props => {
  const classes = useStyles();
  const { className = '', key = '', data = {}, variant = '' } = props;
  return (
    <>
      {' '}
      <Card
        key={key}
        className={classes.card + ' ' + className + ' ' + 'genericCard'}
      >
        {props.children}
        <div className={classes.flex}>
          <div className={classes.flex1}>
            <CustomAvatar className={classes.avatar} />
            <div className={classes.classText}>
              <p className={classes.blackText}>Class one</p>
              <p className={classes.createdBy}>Created by Francisco</p>
            </div>
          </div>
          <div>
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className={classes.iconWrapper}>
          <i className={`far fa-clock ${classes.icon}`}></i>
          <span className={classes.clockText + ' ' + classes.fontColor}>
            Start Course Now
          </span>
        </div>
        {variant !== 'studentFiles' && (
          <div className={classes.iconWrapper}>
            <i className={`far fa-newspaper ${classes.icon}`}></i>
            <span className={classes.paperText + ' ' + classes.fontColor}>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </span>
          </div>
        )}

        {variant !== 'archives' && variant !== 'studentArchives' && (
          <div className={classes.iconWrapper}>
            <i className={`fas fa-arrow-circle-down ${classes.icon}`}></i>{' '}
            <span className={classes.linkText + ' ' + classes.fontColor}>
              http://google.com/something.com/user/api/anonymous/ljdlsjdklasdjaksdlsdassd
            </span>
          </div>
        )}
        {variant !== 'archives' && variant !== 'studentArchives' && (
          <div className={classes.grayBtnsWrapper}>
            <CustomButton title={'TO ACCESS'} className={classes.grayBtns} />{' '}
            <CustomButton title={'TO ACCESS'} className={classes.grayBtns} />{' '}
            <CustomButton title={'TO ACCESS'} className={classes.grayBtns} />
          </div>
        )}
        {variant !== 'studentFiles' ? (
          <div className={classes.flex1}>
            {' '}
            <CustomButton title={'START'} className={classes.startBtn} />
            <CustomButton title={'DOWNLOAD'} className={classes.downloadBtn} />
          </div>
        ) : (
          <CustomButton title={'DOWNLOAD'} className={classes.downloadBtn} />
        )}
      </Card>
    </>
  );
};

export default GenericCard;
