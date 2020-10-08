import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function FormDialog(props) {
  const url = (!props.user) ?
    `${process.env.REACT_APP_API_SERVER_URL}/api/auth/github` :
    `${process.env.REACT_APP_API_SERVER_URL}/api/auth/user/${props.user}`;

  return (
    <Button
      id='root-login-button'
      href={ url }
      variant="outlined"
      color="primary"
      className="buttons">
      <GitHubIcon style={{marginRight: '1rem'}}/>
      Login / Signup with github
    </Button>
  );
}