import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
       name="Obi"
       message="Hello there!?"
       timestamp="50 minutes ago"
       profilePic="https://i.kinja-img.com/gawker-media/image/upload/t_original/y2kau9wuzwkmj6q3ymn7.png"
        />
    </div>
  );
}

export default Chats;
