import React from "react";
import "./Navbar.css";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link, useHistory } from "react-router-dom";


function Navbar({ backButton, user , setUser, menuIsOpen, setMenuIsOpen }) {
  const toggleDrawer = (e) => {
    setMenuIsOpen();
  };

  const history = useHistory ();
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
        <h1><img src="./images/PullReq.svg" alt="PullReqLogo"  width="60rem" /></h1>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Navbar;
