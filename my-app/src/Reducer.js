const initialState = {
  chatroomId:"64005998b8a4cb4bf74edd4c",
  AI_id: "ChatGPTEnglish",
  language: "English",
  AI_image: "AI Image",
  AI_name:"William",
  userId: "josh",

  messages: [
    {
      messageId: "",
      senderId: "",
      senderName:"",
      timeStamp:"",
      text: "",
      translatedText:"",
    },
  ],
};
const GETCHATROOMMESSAGES = 'getChatRoomMessages'
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case GETCHATROOMMESSAGES: {
      const newState = Object.assign({}, state, { ...action.payload, chatroomId: action.payload._id });
      delete newState._id;
      return newState;
    }
    default:
      return state
  }
}