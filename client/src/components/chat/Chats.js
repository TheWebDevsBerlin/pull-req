import React, {useEffect} from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats(props) {
  useEffect(() => {
    props.setBackButton({path: '/', icon: 'back', click: ''})
  },
  [props.setBackButton]);

  return (
    // TODO - Map all chats for this user from DB
    <>
      <Chat
        className="chats"
        name={props.user.name}
        message="Hello there!?"
        timestamp="50 minutes ago"
        profilePic={props.user.image}
      />
    </>
  );
}

export default Chats;
