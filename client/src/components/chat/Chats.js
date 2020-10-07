import React from "react";
import Chat from "./Chat";
import axios from 'axios';

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={ value !== index }
      id={ `full-width-tabpanel-${index}` }
      aria-labelledby={ `full-width-tab-${index}` }
      { ...other }
    >
      {value === index && (
        <Box p={ 2 }>
          <Typography>{ children }</Typography>
        </Box>
      ) }
    </div>
  );
}

class Chats extends React.Component {

  state = {
    matchedContacts: [],
    allContacts: [],
    value: 0,
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  componentDidMount() {
    this.props.setBackButton({ path: '/', icon: 'back', click: '' });

    axios.get(`/api/chat/users/${this.props.user._id}`)
      .then(response => {
        this.setState({
          matchedContacts: response.data.filter(user => user._id !== this.props.user._id)
        });
      });

    axios.get(`/api/chat/users`)
      .then(response => {
        this.setState({
          allContacts: response.data.filter(user => user._id !== this.props.user._id)
        });
      });

  }

  render() {
    return (
      <>
        <AppBar position="static" color="default">
          <Tabs
            value={ this.state.value }
            onChange={ this.handleChange }
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Matched" { ...this.a11yProps(0) } />
            <Tab label="Party" { ...this.a11yProps(1) } />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={ this.state.value }
          onChangeIndex={ this.handleChangeIndex }>
          <TabPanel value={ this.state.value } index={ 0 }>
            <span>Your matches:</span>
            { this.state.matchedContacts.map(contact => (
              <Chat
                key={ contact._id }
                className="chats"
                updateToField={ this.props.updateToField }
                name={ contact.displayName || contact.login }
                id={ contact._id }
                message=''
                timestamp=''
                profilePic={ contact.avatar_url }
              />
            )) }
          </TabPanel>
          <TabPanel value={ this.state.value } index={ 1 }>
            <span>All users:</span>
            { this.state.allContacts.map(contact => (
              <Chat
                key={ contact._id }
                className="chats"
                updateToField={ this.props.updateToField }
                name={ contact.displayName || contact.login }
                id={ contact._id }
                message=''
                timestamp=''
                profilePic={ contact.avatar_url }
              />
            )) }
          </TabPanel>
        </SwipeableViews>
      </>
    )
  };
}

export default Chats;
