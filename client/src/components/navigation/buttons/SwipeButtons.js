import React from 'react';
import './SwipeButtons.css';
import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton  from '@material-ui/core/IconButton';
import SendMessageDialog from './SendMessageDialog';
import Logo from './../../../images/PullReqGreen.svg';
import axios from 'axios';

const SwiptButtons = (props) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
// https://api.github.com/repos/giladt/getHired/issues/4/comments
// https://api.github.com/repos/giladt/getHired/issues/4/comments

  const handleMessageSend = () => {
    axios.post('/api/label/comment', {
      owner: 'giladt', // props.label.repo_id.owner, 
      repo: 'getHired', // props.label.repo_id.repo, 
      issue_number: 5, // props.label.issue_number, 
      body: message
    }).then(res => {
      console.log('message sent successfully', { res });
      setOpen(false);
    }).catch(err => {
      console.log('message failed to send', { err });
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    
    <div className="buttons">
      <IconButton
        onClick={ () => props.handleCardLeftScreen(props.label._id) }
        className="buttons_close">
        <CloseIcon fontSize="large" />
      </IconButton>


      <IconButton className="buttons_github" 
        onClick={() => window.open(props.label.repo.html_url)}>
        <GitHubIcon fontSize="large" />
      </IconButton>


      <IconButton className="buttons_pull">
        <img src={ Logo } alt="PullReqLogo" width="40rem" onClick={ handleClickOpen } />
      </IconButton>
      <SendMessageDialog
        handleClose={ handleClose }
        handleMessageSend={ handleMessageSend }
        message={ message }
        label={ props.label }
        handleMessageChange={ handleMessageChange }
        open={ open }
      />
      
      

    </div>
  );
};

export default SwiptButtons
