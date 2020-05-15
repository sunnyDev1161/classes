import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function CustomSwitch(props) {
  return (
    <Switch
      color="default"
      inputProps={{ 'aria-label': 'checkbox with default color' }}
    />
  );
}
