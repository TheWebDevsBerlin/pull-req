import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
import Logo from './../../../images/PullReqGreen.svg';
import './SendMessage.css';

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
        <DialogTitle id="customized-dialog-title" onClose={ props.handleClose } className="dialogHeader">
           <img src={ Logo } alt="PullReqLogo" width="38rem" align="center"/>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <p>
            Your message will be sent to the project owner, if they accept your offer, you will be able to chat...<br/><br/>
            <strong>git commit -m "</strong>
            </p>
          </Typography>
          <TextareaAutosize  className="textArea"
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
           <Typography gutterBottom>
            <p>
            <strong>"</strong>
              {/* <br/>
              This message has been sent from Pull-request, 
              to connect with the sender, follow this link:
              ----URL GOES HERE----  */}
            </p>
          </Typography>
        </DialogContent>

        <DialogActions>
        <IconButton autoFocus onClick={ props.handleClose } color="secondary">
            Cancel
          </IconButton>
        <IconButton autoFocus onClick={ props.handleMessageSend } color="inherit">
            Pull request
          </IconButton>
          
        </DialogActions>
      </Dialog>
    
  );
}