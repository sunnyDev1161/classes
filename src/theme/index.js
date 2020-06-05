/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { THEMES } from '../constants';
import { red } from '@material-ui/core/colors';

export const inputTheme = {
  input: {
    width: '100%',
    height: '36px',
    border: 'none',
    boxShadow: '3px 4px 25px -8px rgba(0,0,0,0.75)',
    borderRadius: '3px',
    maxWidth: '100%',
    outline: 'none',
    margin: '10px 0',
    padding: '0 10px 0 40px',
    fontSize: THEMES.INPUT_FONT_SIZE,
    color: THEMES.GRAYFONT,
    background: 'white'
  },
  icon: {
    left: '10px',
    position: 'absolute',
    top: '18px',
    fontSize: THEMES.ICON_SIZE,
    color: THEMES.ICONCOLOR
  },
  formBtn: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '24px',
    outline: 'none',
    border: 'none',
    padding: '9px',
    color: 'white',
    margin: '10px 0'
  }
};

export const NoDataCardTheme = {
  imageContainer: {
    width: '300px',
    height: '400px'
  }
};
export const avatar = {
  width: '90px',
  height: '90px',
  border: '3px solid white',
  borderRadius: '50%',
  boxShadow: THEMES.BOX_SHADOW,
  margin: 'auto'
};

export const classCard = {
  card: { width: '31%', padding: '10px', margin: '20px 0' }
};
export const dashBoard = {
  dashboardBtn: {
    fontSize: '10px',
    border: 'none',
    borderRadius: '30px',
    padding: '10px 21px 10px 21px',
    outline: 'none'
  },
  normalText: { fontSize: '20px' },
  largeText: { fontSize: '24px', fontWeight: 'bold' }
};
export const form = {
  form: {}
};
export const formLogo = {
  logo: {
    background: THEMES.YELLOW_BTN,
    width: 'fit-content',
    margin: 'auto',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
    padding: '16px',
    borderRadius: '19px'
  }
};
export const fullWidthCardTheme = { card: { padding: '20px' } };
export const genericCard = {
  card: { width: '32%', padding: '10px', margin: '20px 5px 0 0' }
};
export const getStartedCard = {
  card: {
    width: '33.33%',
    height: '210px',
    boxShadow: THEMES.BOX_SHADOW,
    position: 'relative',
    margin: '0 10px 0 0'
  }
};
export const statisticsCard = {
  card: {
    width: '25%',
    height: '70px',
    padding: '10px',
    boxShadow: THEMES.BOX_SHADOW,
    margin: '0 10px 0 0'
  }
};

export const cardTheme = {
  card: {
    overflow: 'hidden',
    position: 'relative',
    background: '#fff',
    padding: '40px 20px',
    maxWidth: '380px',
    width: '380px',
    minHeight: '340px',
    margin: '20px auto',
    textAlign: 'center',
    boxShadow: 'none'
  }
};
