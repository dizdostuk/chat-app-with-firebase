import React, { useState, useEffect } from 'react';
import Message from './Message';
import { connect } from 'react-redux';

function Messages({ msgs }) {
  const [currentUser, setCurrentUser] = useState({
    "author": "Ryan Florence",
    "avatar": "https://placekitten.com/64/64"
  });
  const [opponent, setOpponentUser] = useState({
    "author": "Anonym",
    "avatar": "https://placekitten.com/64/64"
  });
  const [whoSend, setSendler] = useState(currentUser.author);

  const [messages, setMessages] = useState([
    {
      "id": "0",
      "authorId": currentUser.author,
      "time": "3:37",
      "text": "Alright, lets do this.",
      "avatar": currentUser.avatar
    },
    {
      "id": "1",
      "authorId": opponent.author,
      "time": "3:37",
      "text": "Alright, lets do this.",
      "avatar": opponent.avatar
    }
  ]);

  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>
      <div>
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">12/6/2018</div>
          <div className="DayLine" />
        </div>
        {msgs.map((item) => {
          return <Message
            key={item.id}
            author={item.authorId}
            time={item.time}
            text={item.text}
            avatar={item.avatar} />
        })}
        
      </div>
      <div>
        <div className="Message no-avatar">
          <div className="MessageContent">works now?</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const msgs = state.messages;
  return {
    msgs
  };
};


export default connect(
  mapStateToProps,
  null
)(Messages);
