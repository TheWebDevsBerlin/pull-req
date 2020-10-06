 
import React, { Component } from 'react'

export default class MessagePost extends Component {
  state = {
    user: this.props.user,
    content: this.props.content.content,
    by: this.props.by
  }

  render() {
    let style = ''
    this.state.by._id === this.state.user ?
      style = '-me'
      :
      style = ''
    return (
      <div className={`chat-bubble${style}-row`}>
        <div className={`chat-bubble${style}`} >
          <div className={`chat-bubble-head${style}`}>
            <div className='contact-head' style={{ 'backgroundImage': `url(${this.state.by.picture})` }}></div>
          </div>
          <span className='chat-by'>{ this.state.by._id !== this.state.user && this.state.by.firstname }</span>
          <p>MSG: { this.state.content }</p>
        </div>
      </div >
    )
  }
}