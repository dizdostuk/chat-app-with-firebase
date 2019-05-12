import { GET_MESSAGES, SET_MESSAGES } from "../action-creators";

const initialState = {
  currentUser: "Ryan Florence",
  messages: [
    {
      id: "0",
      authorId: "Ryan Florence",
      time: "3:37",
      text: "Alright, lets do this.",
      avatar: "https://placekitten.com/64/64"
    }
  ]
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case SET_MESSAGES: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: action.id,
            authorId: action.authorId,
            text: action.text,
            time: action.time,
            avatar: action.avatar
          }
        ]
      }
    }
    default: return state;
  }
};

export default reducers;