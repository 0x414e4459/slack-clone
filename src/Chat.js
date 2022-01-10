import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setroomDetails] = useState(null);
  const [roomMessages, setroomMessages] = useState([]);

  useEffect(() => {
    //Room's data
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomDetails(snapshot.data()));
    }
    //room data
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setroomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  // console.log(roomDetails);
  // console.log(roomId);
  return (
    <div className="chat_body">
      <div className="chat_header">
        <div className="chat_header_left">
          <div className="chat_channelName">
            <b>#{roomDetails?.name}</b>
            <StarBorderOutlined />
          </div>
        </div>
        <div className="chat_header_right">
          <InfoOutlined />
          Details
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({ user, userImg, timestamp, message }) => [
          <Message
            user={user}
            userImg={userImg}
            timestamp={timestamp}
            message={message}
          />,
        ])}
      </div>
      <div className="chatInput1">
        <ChatInput />
      </div>
    </div>
  );
}

export default Chat;
