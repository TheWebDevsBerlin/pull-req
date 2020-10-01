import React from "react";
import "./Navbar.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
// import { logout } from '../services/auth';
// import Login from './components/Login';
// import Signup from './components/Signup';

function Navbar({ backButton }) {
  const history = useHistory ();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}
      
      <Link to="/">
        <h1>Pull❣️Request</h1>
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
