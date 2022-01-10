// import userEvent from "@testing-library/user-event";
import React from "react";
import "./Message.css";

function Message({ user, userImg, timestamp, message }) {
  // console.log({ userImg });
  return (
    <div className="message">
      <img src={userImg} alt="" />
      <div className="message_info">
        <h4>
          {user}
          <soan className="message_timestamp">
            {" "}
            {new Date(timestamp?.toDate()).toUTCString()}
          </soan>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
