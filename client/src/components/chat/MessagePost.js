 
import React, { Component } from 'react'
import "./Chat.css";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

export default class MessagePost extends Component {
  state = {
    user: this.props.user,
    content: this.props.content.content,
    by: this.props.by
  }

  render() {
    let style = ''
    this.state.by._id === this.state.user ?
      style = 'chat_textUser' :
      style = 'chat_text'

    return (
      <div className={ style }>
        { this.state.by._id !== this.state.user && (
          <Avatar src={ this.state.by.avatar_url } />) }
        <div>
          <span>{ this.state.content }</span>
        </div>
      </div>
    )
  }
}