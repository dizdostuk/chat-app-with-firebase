import React from 'react';

const Message = ({ author, time, text, avatar }) => {
  return (
    <div className="Message with-avatar">
      <div className="Avatar" style={{backgroundImage: `url(${avatar})`}} />
      <div className="Author">
        <div>
          <span className="UserName">{author} </span>
          <span className="TimeStamp">{time} PM</span>
        </div>
        <div className="MessageContent">{text}</div>
      </div>
    </div>
  );
}

 
export default Message;