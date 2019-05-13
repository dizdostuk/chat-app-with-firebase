import React, { useState, useEffect } from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import { db } from "../firebase";

function Messages({ currentUser, msgs }) {
  // const [currentUser, setCurrentUser] = useState({
  //   "author": "Ryan Florence",
  //   "avatar": "https://placekitten.com/64/64"
  // });
  // const [whoSend, setSendler] = useState(currentUser.author);

  const [messages, setMessages] = useState([]);
  console.log(messages)
  useEffect(() => {
    db.collection('channels').doc('general').collection('messages').onSnapshot(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });

      setMessages(docs);
    });
  }, []);
  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>

      {messages.map((message, index) => {
        return index === 0 ? (
        <div key={message.id}>
          <div className="Day">
            <div className="DayLine" />
            <div className="DayText">12/6/2018</div>
            <div className="DayLine" />
          </div>
          <div className="Message with-avatar">
            <div className="Avatar" style={{backgroundImage: `url(https://placekitten.com/64/64)`}} />
            <div className="Author">
              <div>
                <span className="UserName">Ryan Florenzi</span>
                <span className="TimeStamp">3:37 PM</span>
              </div>
              <div className="MessageContent">{message.text}</div>
            </div>
          </div>
        </div>
        ) : (
        <div key={message.id}>
          <div className="Message no-avatar">
            <div className="MessageContent">{message.text}</div>
          </div>
        </div>
        )
      })}
    </div>
  );
};

const mapStateToProps = ({currentUser, messages}) => {
  return {
    currentUser,
    messages
  };
};


export default connect(
  mapStateToProps,
  null
)(Messages);
