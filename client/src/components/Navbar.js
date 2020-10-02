import React from "react";
import "./Navbar.css";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TemporaryDrawer from "./Menu";
import { Link, useHistory } from "react-router-dom";


function Navbar({ backButton, user , setUser }) {
  const history = useHistory ();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton> 
          <TemporaryDrawer user={user} setUser={setUser}/> 
        </IconButton>
      )}
      
      <Link to="/">
        <h1>Pull<span role="img" aria-label="Heart">❣️</span>Request</h1>
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
