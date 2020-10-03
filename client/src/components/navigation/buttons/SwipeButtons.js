import React from 'react';
import './SwipeButtons.css';
import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton  from '@material-ui/core/IconButton';
import LikeMsg from './LikeBtn';



const SwiptButtons = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div className="buttons">
        <IconButton className="buttons_close">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="buttons_github">
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton className="buttons_fav">
          <LikeMsg fontSize="large" 
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
          />
        </IconButton>
      </div>
    );
};

export default SwiptButtons
