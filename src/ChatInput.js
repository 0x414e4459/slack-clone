import React, { useState } from "react";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat";
import { useParams } from "react-router-dom";
import "./chatInput.css";

function ChatInput(channelName) {
  const [Input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const { roomId } = useParams();
  const sendMessage = (e) => {
    const channelId = roomId;
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: Input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userImg: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`message# ${channelName?.toLowerCase}`}
        />
        <button onClick={sendMessage}>send</button>
      </form>
    </div>
  );
}

export default ChatInput;
