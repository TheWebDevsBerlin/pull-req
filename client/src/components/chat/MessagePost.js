import React, { Component } from 'react'
import "./Chat.css";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import { formatRelative, subDays } from 'date-fns'

export default class MessagePost extends Component {
  state = {
    user: this.props.user,
    content: this.props.content.content,
    by: this.props.by,
    time: this.props.time
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
          <div>{ this.state.content }</div>
          <div>{
            formatRelative(subDays(Date.parse(this.state.time), 0), new Date())
          }</div>
        </div>
      </div>
    )
  }
}