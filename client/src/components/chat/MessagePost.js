 
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
    this.state.by._id === this.state.user._id ?
      style = 'chat_text'

      :
      style = 'chat_textUser'
      
      console.log(this.state.by._id, this.state.user._id)
    return (
      <div className={style}>
          <span>{this.state.by._id !== this.state.user._id && this.state.by.firstname}</span>
          <p>{this.state.content}</p>

      </div>
    )
  }
}