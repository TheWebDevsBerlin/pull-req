import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';

import GitHubIcon from '@material-ui/icons/GitHub';
import EditIcon from '@material-ui/icons/Edit';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';
import "./Navbar.css";

import { logout } from '../../services/auth';

const useStyles = makeStyles({
  list: {
    maxWidth: 350,
    width: "75vw"
  },
  fullList: {
    width: 'auto',
  },
  link: {
    display: 'contents'
  }
});

export default function SideMenu(props) {
  const classes = useStyles();

  const handleLogoutGithub = e => {
    e.preventDefault();
    if(props.user){
      logout();
      props.setUser(null);
      props.closeMenu();
    };
  }

  let container = document.querySelector("#root");

  return (
    <React.Fragment key='left'>
      <Drawer 
        PaperProps={{ style: { position: 'absolute' } }}
        BackdropProps={{ style: { position: 'absolute' } }}
        ModalProps={{
          container,
          style: { position: 'absolute' }
        }}
        variant="temporary"
        container={container}
        anchor='left'
        open={props.menuIsOpen} 
        onClose={props.closeMenu}
      >
        <List className={clsx(classes.list)}>
          <ListItem button divider disabled>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
            <ListItemSecondaryAction onClick={props.closeMenu}>
              <IconButton edge="end" aria-label="delete">
                <CloseIcon/>
              </IconButton>              
            </ListItemSecondaryAction>
          </ListItem>
          <hr/>
          <ListItem button>
            <ListItemIcon><EditIcon /></ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
          {props.user ? (
            <ListItem button onClick={handleLogoutGithub}>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItem>
          ):(
          <ListItem button>
                <a className={ clsx(classes.link) } href={ `${process.env.REACT_APP_API_SERVER_URL}/api/auth/github` }>
            <ListItemIcon><GitHubIcon/></ListItemIcon>
            <ListItemText primary="Login / Sign up" />
            </a>
          </ListItem>
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
}