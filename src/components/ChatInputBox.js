import React, { useState } from 'react';
import { connect } from "react-redux";
import { setMessages } from "../actions";
import { db } from "../firebase";

let curntUser = "";
let messageTime = "";
let message = "";

function ChatInputBox({ currentUser, sendMessage, text, time }) {
  curntUser = currentUser;
  message = text;
  messageTime = time;
  const [ inpValue, setValue ] = useState("");


  const handleSubmit = (value) => {
      sendMessage(value);
      setValue("");
      db.collection('channels')
        .doc('general')
        .collection('messages')
        .add({
          text: inpValue,
          createdAt: new Date()
        });
  };

  const handleChange = (text) => {
    setValue(text);
  };

  return (
    <div className="ChatInputBox">
      <form onSubmit={(e) => {
        e.preventDefault();
          handleSubmit(inpValue)
        }
        }>
        <input
          className="ChatInput"
          placeholder="Message #general"
          value={inpValue}
          onChange={(e) => handleChange(e.target.value)}
          />
      </form>
    </div>
  );
};

const mapStateToProps = ({ currentUser, messages }) => {
  const text = messages[0].text;
  const time = messages[0].time;

  return { currentUser, text, time };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (msg) => dispatch(setMessages(msg, [1, curntUser, new Date().toDateString(), "https://placekitten.com/64/64"]))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInputBox);
