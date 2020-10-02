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
            <Navbar backButton="/chat"/> 
            <ChatScreen />
          </Route>
          <Route exact path="/chat">
            <Navbar backButton="/"/> 
            <Chats />
          </Route>
          <Route exact path="/">
            <Navbar />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route exact path="/settings">
          <Navbar backButton="/"/> 
          <Signup user={this.state.user} setUser={this.setUser} />
          </Route>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App