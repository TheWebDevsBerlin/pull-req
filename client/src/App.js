import React, { Component } from 'react'
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards"
import SwipeButtons from "./components/navigation/buttons/SwipeButtons";
import Chats from "./components/chat/Chats";
import ChatScreen from "./components/chat/ChatScreen";
import Signup from "./components/Signup";
import SideMenu from "./components/navigation/Menu";
import "./App.css";

class App extends Component {

  state = {
    user: this.props.user,
    backButton: {path: '/', icon: 'menu', click: ''},
    menuIsOpen: false
  }

  setUser = user => {
    this.setState({ user });
  }

  setBackButton = (info) => {
    const {path, icon, click} = info;
    const backButton = {
      path: path || '',
      icon: icon || 'menu',
      click: click || ''
    }
    this.setState({ backButton });
  }

  handleMenuIsOpen = () => {
    this.setState(prevState => ({menuIsOpen: !prevState.menuIsOpen}))
  }

  handleCloseMenu = () => {
    this.setState(prevState => ({menuIsOpen: false}))
  }

  render() {
    return (
      <Router className="App">
      
        <Navbar 
          user={this.state.user} 
          setUser={this.setUser} 
          backButton={this.state.backButton}
          menuIsOpen={this.state.menuIsOpen}
          setMenuIsOpen={this.handleMenuIsOpen}
          closeMenu={this.handleCloseMenu}
        /> 
        <SideMenu 
          user={this.state.user} 
          setUser={this.setUser} 
          menuIsOpen={this.state.menuIsOpen} 
          closeMenu={this.handleCloseMenu}
        /> 
        <Switch>
          <Route exact path="/chat/:person">
            <ChatScreen 
              user={this.state.user} 
              to={this.state.to}
              setBackButton={this.setBackButton} />
          </Route>
          <Route exact path="/chat">
            <Chats 
              user={this.state.user} 
              setBackButton={this.setBackButton} />
          </Route>
          <Route exact path="/">
            <TinderCards 
              user={this.state.user} 
              setBackButton={this.setBackButton} />
          </Route>
        </Switch>
        <Signup user={ this.state.user }/>
        <SwipeButtons />
      </Router>
    )
  }
}

export default App