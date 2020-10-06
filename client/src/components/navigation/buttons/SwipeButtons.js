import React from 'react';
import './SwipeButtons.css';
import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton  from '@material-ui/core/IconButton';
import SendMessageDialog from './SendMessageDialog';
import Logo from './../../../images/PullReqLogo.svg';

// import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const SwiptButtons = (props) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSend = () => {
    console.log('sending message (todo)', message);
    console.log(props.currentLabel)
    // octokit.issues.createComment({
    //   owner,
    //   repo,
    //   issue_number,
    //   body,
    // });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className="buttons">
      {(props.label) && (
        <>
        <IconButton
          onClick={ () => props.handleCardLeftScreen(props.label._id) }
          className="buttons_close">
          <CloseIcon fontSize="large" />
        </IconButton>
          <IconButton className="buttons_github"
            onClick={ () => window.open(props.label.repo.html_url) }>
          <GitHubIcon fontSize="large" />
        </IconButton>

        <IconButton className="buttons_fav">
            <img src={ Logo } alt="PullReqLogo" width="40rem" onClick={ handleClickOpen } />
        </IconButton>
        <SendMessageDialog
          handleClose={ handleClose }
          handleSend={ handleSend }
          message={ message }
          handleMessageChange={ handleMessageChange }
          open={ open }
        />
        </>
      ) }

    </div>
  );
};

export default SwiptButtons
