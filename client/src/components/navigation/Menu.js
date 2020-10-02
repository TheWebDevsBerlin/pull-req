import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import EditIcon from '@material-ui/icons/Edit';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import "./Navbar.css";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { logout } from '../../services/auth';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, left: open });
  };

  const handleLogoutGithub = e => {
    e.preventDefault();
    if(props.user){
      logout();
      props.setUser(null);
    };
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Edit Profile"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><EditIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {props.user ? (
        <ListItem button onClick={handleLogoutGithub}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      ):
        (
        <ListItem button href="http://localhost:5555/api/auth/github">
          <ListItemIcon><GitHubIcon/></ListItemIcon>
          <ListItemText primary="Login / Sign up" />
        </ListItem>
        )}
      </List>
    </div>
  );

  let anchor = "left";
  return (
    <>
      <React.Fragment key={anchor}>
        <Button 
          onClick={toggleDrawer(anchor, true)} 
          style={{borderRadius: "90px"}}>
          <MenuIcon 
            fontSize="large" 
            className="header_icon" 
          />
        </Button>
        <Drawer 
          anchor={anchor} 
          open={state[anchor]} 
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </>
  );
}