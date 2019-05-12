import React, {useState} from 'react';
import { connect } from "react-redux";
import { setMessages } from "../actions";

let curntUser = "";

function ChatInputBox({ currentUser, sendMessage }) {
  curntUser = currentUser;
  const [ inpValue, setValue ] = useState("");
  let count = 0;

  const handleSubmit = (text) => {
      sendMessage(text);
      setValue("");
  };

  const handleChange = (text) => {
    setValue(text);
  };

  return (
    <div className="ChatInputBox">
      <input
        className="ChatInput" 
        placeholder="Message #general" 
        value={inpValue} 
        onChange={(e) => handleChange(e.target.value)}
         />
      <button className="btn btn-success" onClick={() => handleSubmit(inpValue)}>Submit</button>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
}

const mapDispatchToProps = (dispatch) => {
  const date = new Date();
  return {
    sendMessage: (msg) => dispatch(setMessages(msg, [1, curntUser, date.getHours() + ":" + date.getMinutes() , "https://placekitten.com/64/64"]))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInputBox);
