import React, { Component } from 'react'
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards"
import SwipeButtons from "./components/navigation/buttons/SwipeButtons";
import Chats from "./components/chat/Chats";
import ChatScreen from "./components/chat/ChatScreen";
import Signup from "./components/Signup";
import SideMenu from "./components/navigation/Menu";
import axios from 'axios';

import "./App.css";

class App extends Component {

  state = {
    user: this.props.user,
    backButton: {path: '/', icon: 'menu', click: ''},
    menuIsOpen: false,
    // cards logic:
    labels: [],
    page: 1,
    currentLabel: {}
  }

  handleCardLeftScreen = (id) => {
    const currentLabel = this.state.labels.find(label => label._id === id);
    const newLabels = this.state.labels.filter(label => label._id !== id);
    this.setState({ labels: newLabels });
    this.setState({ currentLabel });
  }

  loadNextPage = () => {
    const q = 'help-wanted&is:public'
    axios.get(`/api/labels/${q}/2/${this.state.page}`)
      .then(response => {
        const labels = [...response.data.data, ...this.state.labels];
        this.setState({ labels, page: this.state.page + 1 });
      })
      .catch(err => this.setState({ message: `Error fetching labels. \n ${err}` }));
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
          closeMenu={ this.handleCloseMenu } />
        <SideMenu 
          user={this.state.user} 
          setUser={this.setUser} 
          menuIsOpen={this.state.menuIsOpen} 
          closeMenu={this.handleCloseMenu}
        /> 
        <Switch>
          <Route exact path="/chat/:person">
            <ChatScreen user={this.state.user} setBackButton={this.setBackButton} />
          </Route>
          <Route exact path="/chat">
            <Chats user={this.state.user} setBackButton={this.setBackButton} />
          </Route>
          <Route exact path="/">
            <TinderCards
              user={ this.state.user }
              loadNextPage={ this.loadNextPage }
              labels={ this.state.labels }
              page={ this.state.page }
              handleCardLeftScreen={ this.handleCardLeftScreen }
              setBackButton={ this.setBackButton }
            />
          </Route>
        </Switch>
        {this.state.user ?
          (<SwipeButtons label={ this.state.currentLabel } handleCardLeftScreen={ this.handleCardLeftScreen } currentLabel={ this.state.currentLabel } />) :
          (<Signup user={ this.state.user } />)
        }
      </Router>
    )
  }
}

export default App