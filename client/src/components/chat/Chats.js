import React from "react";
import Chat from "./Chat";
import axios from 'axios';

class Chats extends React.Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    this.props.setBackButton({ path: '/', icon: 'back', click: '' })
    axios.get(`/api/chat/users/${this.props.user._id}`)
      .then(response => {
        this.setState({
          contacts: response.data.filter(user => user._id !== this.props.user._id)
        });
      });
  }

  render() {
    return (
      this.state.contacts.map(contact => {
        return (
          <Chat 
            key={ contact._id }
            className="chats"
            updateToField={ this.props.updateToField }
            name={ contact.displayName || contact.login }
            id={ contact._id }
            message=''
            timestamp=''
            profilePic={ contact.avatar_url }
          />
        )
      })
    )
  };
}

export default Chats;
