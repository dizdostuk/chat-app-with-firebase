import { GET_MESSAGES, SET_MESSAGES } from "../action-creators";

const setMessages = (text, [id, authorId, time, avatar]) => {
  return {
    type: SET_MESSAGES,
    id: id,
    authorId: authorId,
    time: time,
    text: text,
    avatar: avatar
  }
};


export {
  setMessages
};