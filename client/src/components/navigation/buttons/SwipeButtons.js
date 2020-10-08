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

  const handleMessageSend = () => {

    const label = props.labels ? props.labels[props.labels.length - 1] : '';
    const user = props.user || '';

    const temp_message = ` 
  ${message}\n
  ###Hi ${label.owner.login || 'there'},
  This message has been sent from <a href="https://github.com/TheWebDevsBerlin/pull-req">Pull-req</a>, to connect with ${user.displayName || ''}, please follow this <a href="http://pull-req.herokuapp.com/chat/${user._id}">Link</a>.

  Cheers,
  Pull-req team!
  `;
    axios.post('/api/label/comment', {
      owner: label.owner.login,
      repo: label.repo_id.repo,
      issue_number: label.issue_number,
      body: temp_message
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
        setMessage={ setMessage }
        handleMessageChange={ handleMessageChange }
        open={ open }
      />

    </div>
  );
};

export default SwiptButtons
