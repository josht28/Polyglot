const initialState = {
  chatroomId: "6400a272301f4a1e487c320b",
  AI_id: "ChatGPTEnglish",
  language: "English",
  AI_image: "AI Image",
  AI_name: "William",
  userId: "josh",

  messages: [
    {
      messageId: "",
      senderId: "",
      senderName: "",
      timeStamp: "",
      text: "",
      translatedText: "",
    },
  ],
};
const GETCHATROOMMESSAGES = 'getChatRoomMessages'
const UPDATEMESSAGES = 'updatemessages'
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case GETCHATROOMMESSAGES: {
      const newState = Object.assign({}, state, { ...action.payload, chatroomId: action.payload._id });
      delete newState._id;
      return newState;
    }
    case UPDATEMESSAGES: {
       const newState = Object.assign({}, state, {
         ...action.payload,
         chatroomId: action.payload._id,
       });
       delete newState._id;

      }
    default:
      return state
  }
}