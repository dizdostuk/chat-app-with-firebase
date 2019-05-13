import React from 'react';

const Message = ({ time, text }) => {
  return (
    <div className="Message with-avatar">
      <div className="Avatar" style={{backgroundImage: `url(https://placekitten.com/64/64)`}} />
      <div className="Author">
        <div>
          <span className="UserName">Ryan Florenzi</span>
          <span className="TimeStamp">{time} PM</span>
        </div>
        <div className="MessageContent">{text}</div>
      </div>
    </div>
  );
}

 
export default Message;