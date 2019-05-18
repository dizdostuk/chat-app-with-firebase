import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import useCollection from "../useCollection";
import useDocWithCache from "../useDocWithCache";
import formateDate from "date-fns/format";
import isSameDate from "date-fns/is_same_day";

function scrollDownManager(ref) {
  useEffect(() => {
    const node = ref.current;
    node.scrollTop = node.scrollHeight;
  });
}

function Messages({ channelId }) {
  const messages = useCollection(
    `channels/${channelId}/messages`,
    "createdAt"
  );

  const scrollerRef = useRef();
  scrollDownManager(scrollerRef);
  return (
    <div ref={scrollerRef} className="Messages">
      <div className="EndOfMessages">That's every message!</div>

      {messages.map((message, index) => {
        const previous = message[index-1];
        const showDay = shouldShowDay(previous, message);
        const showAvatar = shouldShowAvatar(previous, message);

        return showAvatar ? (
          <FirstMessageCommit
            key={message.id}
            message={message}
            showDay={showDay}
          />
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



function FirstMessageCommit({ message, showDay }) {

  const author = useDocWithCache(message.user.path);

  return (<div key={message.id}>
    {showDay && (<div className="Day">
      <div className="DayLine" />
      <div className="DayText">{new Date(message.createdAt.seconds * 1000).toLocaleDateString()}</div>
      <div className="DayLine" />
    </div>)}
    <div className="Message with-avatar">
      <div className="Avatar" style={{
        backgroundImage: author ? `url("${author.photoURL}")` : ""
      }} />
      <div className="Author">
        <div>
          <span className="UserName">{author && author.displayName}</span>
          {" "}
          <span className="TimeStamp">
          {formateDate(
            message.createdAt.seconds * 1000,
            "h:mm A"
          )}
          </span>
        </div>
        <div className="MessageContent">{message.text}</div>
      </div>
    </div>
  </div>)
};

function shouldShowDay(previous, message) {
  const isFirst = !previous;
  if(isFirst) {
    return true;
  }

  const newDay = !isSameDate(
    previous.createdAt.seconds * 1000,
    message.createdAt.seconds * 1000
  );

  return newDay;
}

function shouldShowAvatar(previous, message) {
  const isFirst = !previous;
  if(isFirst) {
    return true;
  }

  const differentUser = message.user.id !== previous.user.id;
  if(differentUser) {
    return true;
  }

  const hasBeenAWhile = message.createdAt.seconds - previous.createdAt.seconds > 180;
  return  hasBeenAWhile;
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
