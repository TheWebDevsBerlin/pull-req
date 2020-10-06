 
import React, { Component } from 'react'
import "./Chat.css";
import "./ChatScreen.css";

export default class MessagePost extends Component {
  state = {
    user: this.props.user,
    content: this.props.content.content,
    by: this.props.by
  }

  render() {
    let style = ''
    this.state.by._id === this.state.user ?
      style = 'chat_textUser'
  

      :
      style = 'chat_text'
      
    return (
      <div className={style}>
          <span>{this.state.by._id !== this.state.user && this.state.by.firstname}</span>
          <p>{this.state.content}</p>

      </div>
    )
  }
}