import React from "react";
import "./Navbar.css";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from './../../images/PullReq.svg';

function Navbar({ backButton, user, menuIsOpen, setMenuIsOpen }) {
  const toggleDrawer = (e) => {
    setMenuIsOpen();
  };

  const history = useHistory ();
  const location = useLocation();

  return (
    <div className="header">
      {(backButton && backButton.icon === 'back') && (
        <IconButton 
          onClick={e => history.replace(backButton.path)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      )}
      {(backButton && backButton.icon === 'menu') && (
        <IconButton 
          onClick={toggleDrawer}>
          {!menuIsOpen ? (
            <MenuIcon 
              fontSize="large" 
              className="header_icon" 
            />
          ) : (
            <CloseIcon
              fontSize="large" 
              className="header_icon" 
            />
          )}
        </IconButton>
      )}
      
      <Link to="/">
        <img src={ Logo } alt="PullReqLogo" width="55rem" />
      </Link>

      <IconButton style={ { visibility: ((location.pathname !== '/' || !user) && 'hidden') } } href="/chat">
        <ForumIcon className="header_icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Navbar;
