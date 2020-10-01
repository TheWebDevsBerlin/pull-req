import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Obi",
      image:
        "https://i.kinja-img.com/gawker-media/image/upload/t_original/y2kau9wuzwkmj6q3ymn7.png",
      message: "Hello there 🤭",
    },
    {
      message: "ahh Codobi, you are a bold one",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput('');
}


  return (
    <div className="chatScreen">
      <p className="chat_timestamp">YOU MATCHED WITH OBI ON 17/8/2020</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatMessage">
            <Avatar
              className="chatMessage_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chat_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatMessage">
            <p className="chat_textUser">{message.message}</p>
          </div>
        )
      )};

      
        <form className="chat_input">
          <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type something"
          className="message_input"/>
          <button  onClick={handleSend} className="inputBtn">SEND</button>
        </form>
      </div>
  );
}

export default ChatScreen;
