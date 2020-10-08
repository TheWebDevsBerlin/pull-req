import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={ classes.root } { ...other }>
      <Typography variant="h6">{ children }</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={ classes.closeButton } onClick={ onClose }>
          <CloseIcon />
        </IconButton>
      ) : null }
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function SendMessageDialog(props) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
   
      <Dialog
        onClose={ props.handleClose }
        fullScreen={ fullScreen }
        aria-labelledby="customized-dialog-title"
        open={ props.open }>
        <DialogTitle id="customized-dialog-title" onClose={ props.handleClose }>
          <h3>Send a pull request!</h3>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <p>
              Your message will be sent to the repo owner on GitHub
            </p>
          </Typography>
          <TextareaAutosize
            value={ props.message }
            onChange={ props.handleMessageChange }
            aria-label="empty textarea"
            placeholder="Why is your code so bad?"
            style={ {
              margin: '0',
              padding: '1rem 0 0 0',
              width: '100%',
              border: 'none',
              outlineStyle: 'dotted',
              outlineColor: 'lightgray',
              borderTop: '3px dotted gray',
              minHeight: '5rem'
            } }
          />
        </DialogContent>

        <DialogActions>
        <Button autoFocus onClick={ props.handleMessageSend } color="primary">
            Pull request
          </Button>
          <Button autoFocus onClick={ props.handleClose } color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}