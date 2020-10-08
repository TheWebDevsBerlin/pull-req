import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";
import { Link } from "react-router-dom";

function Chat({ id, name, profilePic, updateToField }) {
  return (
    <Link to={ `/chat/${id}` } onClick={ () => updateToField(id) }>
      <div className="chat">
        <Avatar className="chat_image" src={profilePic} />
        <div className="details">
          <strong>{ name }</strong>
        </div>
      </div>
    </Link>

  );
}

export default Chat;
