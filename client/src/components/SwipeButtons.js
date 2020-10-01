import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRating from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashonIcon from "@material-ui/icons/FlashOn";
import IconButton  from '@material-ui/core/IconButton';


const SwiptButtons = () => {
    return (
        <div className="buttons">
        {/* <IconButton className="buttons_repeat">
            <ReplayIcon fontSize="large" />
        </IconButton> */}
        <IconButton className="buttons_close">
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="buttons_star">
            <StarRating fontSize="large" />
        </IconButton>
        <IconButton className="buttons_fav">
            <FavoriteIcon fontSize="large" />
        </IconButton>
        {/* <IconButton className="buttons_flash">
            <FlashonIcon fontSize="large" />
        </IconButton> */}
        </div>
    );
};

export default SwiptButtons
