import React from 'react';
import { connect } from 'react-redux';
import useCollection from "../useCollection";


function Messages() {

  const messages = useCollection(
    "channels/general/messages",
    "createdAt"
  );

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

// const mapStateToProps = ({currentUser, messages}) => {
//   return {
//     currentUser,
//     messages
//   };
// };


export default connect(
  null,
  null
)(Messages);
