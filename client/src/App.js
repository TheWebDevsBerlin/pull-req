import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards"
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Signup from "./components/Signup";
import "./App.css";

class App extends Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/chat/:person">
            <Navbar user={this.state.user} setUser={this.setUser} backButton="/chat"/> 
            <ChatScreen />
          </Route>
          <Route exact path="/chat">
            <Navbar user={this.state.user} setUser={this.setUser} backButton="/"/> 
            <Chats />
          </Route>
          <Route exact path="/">
            <Navbar user={this.state.user} setUser={this.setUser} />
            <TinderCards />
            <SwipeButtons />
            <Signup user={ this.state.user }/>
          </Route>
          <Route exact path="/settings">
          <Navbar user={this.state.user} setUser={this.setUser} backButton="/"/> 
          <Signup user={this.state.user} setUser={this.setUser} />
          </Route>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App