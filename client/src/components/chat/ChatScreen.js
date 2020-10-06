import React from "react";
import "./ChatScreen.css";
import { Redirect } from "react-router-dom";
import MessagePost from './MessagePost';
import ChatForm from './ChatForm';
import axios from 'axios'
import socketIOClient from "socket.io-client";

let socket;

class ChatScreen extends React.Component {
  state = {
    by: this.props.user._id,
    to: this.props.to,
    messageHistory: [],
    message: "",
    response: "", // socket io response
    endpoint: "http://localhost:5555", // socket io connection
    actionFeedback: "",
    systemFeedback: ""
  }

  componentDidMount = () => {
    axios.get('/api/chat/messages').then(response => {
      this.setState({ messageHistory: response.data })
    }).catch(err => console.log(err))

    // ### Socket Client ####

    const { endpoint } = this.state;
    socket = socketIOClient(endpoint);

    socket.on("message", data => {
      const { type, message } = data
      console.log({ IncomingData: data });
      if (type === 'message') {
        this.setState({ response: message })
        axios.get('/api/chat/messages').then(response => {
          if (response) this.setState({ messageHistory: response.data })
        })
      } else if (type === 'typing') {
        this.setState({ actionFeedback: message });
      } else if (type === 'system') {
        this.setState({ systemFeedback: message });
        this.props.isConnected(message)
      }
    });

    socket.send({ type: 'system', message: `${this.state.by} is connected.` })
  }

  isTyping = typing => {
    socket.send({ type: 'typing', message: typing })
  }

  postMessage = message => {

    axios.post('/api/chat/messages', {
      to: this.state.to,
      by: this.state.by,
      message: message
    }).then(() => {
      socket.send({ type: 'message', message: message });
      socket.send({ type: 'typing', message: null });
    }).catch(err => console.log(err))
    this.setState({
      message: ""
    })
  }

  render() {
    if (!this.props.user) return (<Redirect to='/' />)

    const messageHistory = this.state.messageHistory.map(x => {
      return <li key={ x._id }> <MessagePost user={ this.props.user._id } by={ x.by } to={ x.to } content={ x } /></li>
    })

    const { actionFeedback } = this.state;
    const { systemFeedback } = this.state;
    systemFeedback.length && setTimeout(() => {
      this.setState({ systemFeedback: "" })
    }, 2000)

    return (
      <div className="chat-area">
            <div>
               { messageHistory }
            </div> 
            <div>
              { actionFeedback }
              { systemFeedback }
            </div>
        <ChatForm
          postMessage={ this.postMessage }
          user={ this.props.user }
          isConnected={ this.props.isConnected }
          isTyping={ this.isTyping } />
      </div>
    )
  }

}
export default ChatScreen;
