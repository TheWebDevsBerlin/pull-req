import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from "@material-ui/icons/Person";
import EditIcon from '@material-ui/icons/Edit';
import "./Navbar.css";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, left: open });
  };

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
        {["SignOut"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  let anchor = "left";
  console.log(PersonIcon)
  return (
    <div>

        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{borderRadius: "90px"}}><MenuIcon fontSize="large" className="header_icon" /> </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}