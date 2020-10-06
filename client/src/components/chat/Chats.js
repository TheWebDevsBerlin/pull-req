import React from "react";
import Chat from "./Chat";
import axios from 'axios';

class Chats extends React.Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    axios.get('/api/chat/users')
      .then(response => {
        this.setState({
          contacts: response.data.filter(user => user._id !== this.props.user._id)
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.contacts.length !== this.state.contacts.length) {
    //   const newContacts = [];
    //   for (const idx in this.state.contacts) {
    //     const id = this.state.contacts[idx]._id;
    //     newContacts.push(this.findLastMessageFromUser(id, idx));
    //     this.setState({ contacts: newContacts });
    //   }
    // }
  }


  findLastMessageFromUser = (id, idx) => {
    // axios.get(`/api/chat/messages/last-from-user/${id}`)
    //   .then(response => {
    //     const lastMessage = {
    //       content: response.data.content,
    //       from: response.data.created_at
    //     }
    //     const lm = this.state.contacts;
    //     console.log({ lm: lm[idx], lastMessage });
    //     lm.lastMessage = lastMessage;
    //     return lm;
    //   });
  }

  render() {
    return (
      this.state.contacts.map(contact => {
        return (
          <Chat 
            className="chats"
            name={ contact.login }
            message=''//{ this.state[contact._id].content }//'{ this.findLastMessageFromUser(contact._id).content }'
            timestamp='{ this.findLastMessageFromUser(contact._id).created_at }'
            profilePic={ contact.avatar_url }
          />
        )
      })
    )
  };
}

export default Chats;
