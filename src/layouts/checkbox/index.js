import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);
const CustomCheckbox = props => {
  const { label = '' } = props;
  return (
    <>
      {' '}
      <FormControlLabel
        control={<GreenCheckbox checked={true} name="checkedG" />}
        label={label}
      />
    </>
  );
};

export default CustomCheckbox;
