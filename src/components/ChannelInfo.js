import React from 'react';
import useDoc from '../useDocWithCache';

function ChannelInfo({ channelID }) {
  const channel = useDoc(`channels/${channelID}`)
  return (
    <div className="ChannelInfo">
      <div className="Topic">
        Topic:{" "}
        <input
          className="TopicInput" 
          defaultValue={channel && channel.topic} />
      </div>
      <div className="ChannelName">#{channelID}</div>
    </div>
  );
}

export default ChannelInfo;
