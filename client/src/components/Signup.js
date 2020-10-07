import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  return (
    !props.user && (
      <Button
        id='root-login-button'
        href={ `${process.env.REACT_APP_API_SERVER_URL}/api/auth/github` }
        variant="outlined"
        color="primary"
        className="buttons">
        <GitHubIcon style={{marginRight: '1rem'}}/>
        Login / Signup with github
      </Button>
    )
  );
}