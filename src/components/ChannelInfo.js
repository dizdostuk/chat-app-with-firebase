import React from 'react';

function ChannelInfo({ value, handleChange }) {
  return (
    <div className="ChannelInfo">
      <div className="Topic">
        Topic: <input className="TopicInput" value={value} />
      </div>
      <div className="ChannelName">#general</div>
    </div>
  );
}

export default ChannelInfo;
