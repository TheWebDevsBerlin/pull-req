import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      { !props.user && (
        <Button href="http://localhost:5555/api/auth/github" variant="outlined" color="primary" className="buttons">
          <GitHubIcon style={{marginRight: '1rem'}}/>
          Login / Signup with github
        </Button>
      )}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">SignUp with GitHub!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You must have a GitHub account to send a pull request...
          </DialogContentText>
          <Button href="http://localhost:5555/api/auth/github">
            <GitHubIcon style={{marginRight: '1rem'}}/>
            Login / Signup with github
          </Button>
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
/*
  handleLogoutGithub = e => {
    e.preventDefault();
    if(this.props.user){
      logout();
      this.props.setUser(null);
    };
  }

<Button
  component="button"
  onClick={this.handleLogoutGithub}>
  Logout
</Button>
*/