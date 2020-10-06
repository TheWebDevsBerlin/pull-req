import React from "react";
import Chat from "./Chat";

function Chats(props) {
  console.log('USERS', props.connectedUsers)
  return (
    props.connectedUsers.map(contact => (
      <Chat 
        className="chats"
        name={ props.user.login }
        message={ `Hello ${contact}!?` }
        timestamp="50 minutes ago"
        profilePic={ props.user.avatar_url }
      />
    ))
  );
}

export default Chats;
