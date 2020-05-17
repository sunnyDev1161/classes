import React from 'react';
import { makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogTitle } from '@material-ui/core';
// import { modal } from 'src/theme';

const useStyles = makeStyles(theme => ({
  // muiPaper: modal.modal
}));

export default function CustomModal(props) {
  const classes = useStyles();
  const { open = false, handleClose, title = '' } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ background: 'gainsboro' }}>{title}</DialogTitle>

        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </div>
  );
}
