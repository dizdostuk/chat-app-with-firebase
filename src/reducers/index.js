import { GET_MESSAGES, SET_MESSAGES } from "../action-creators";

const initialState = {
  currentUser: "Ryan Florence",
  messages: [
    {
      id: "0",
      authorId: "Ryan Florence",
      time: null,
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
            time: action.time,
            text: action.text,
            avatar: action.avatar
          }
        ]
      }
    }
    default: return state;
  }
};

export default reducers;