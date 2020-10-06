import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

export default class ChatForm extends Component {
  state = {
    user: this.props.user,
    message: "",
  }

  handleChange = e => {
    const { name, value } = e.target
    let typing = value.length ? `${this.state.user.displayName || this.state.user.username} is typing...` : null
    this.setState({ [name]: value })
    this.props.isTyping(typing)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postMessage(this.state.message)
    this.setState({
      message: ""
    })
  }

  render() {
    if (!this.props.user) return (<Redirect to='/' />)

    return (
      <div>
        <form className="chat-form" onSubmit={this.handleSubmit}>
          <div className="contact-head" style={{ "backgroundImage": `url(${this.state.user.picture})` }}></div>
          <input type="text" name="message" placeholder="Type your message here..." value={this.state.message} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}