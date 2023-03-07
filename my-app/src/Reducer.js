import {combineReducers} from 'redux'
const initialState = {
  chatroomId: "",
  AI_id: "",
  targetLanguage: "",
  AI_image: "",
  AI_name: "",
  userId: "josh",
  user_name: "Josh",
  nativeLanguage: "",
  messages: [
    {
      messageId: "",
      senderId: "",
      senderName: "",
      timeStamp: "",
      text: "",
      audio:"",
      translatedText: "",
    },
  ],
};
const initalChatroomList = {
  chatroomList:[]
}
const GETCHATROOMMESSAGES = "getChatRoomMessages";
const UPDATEMESSAGES = "updatemessages";
const UPDATEVOICEMESSAGE = "updateVoiceMessage";
const UPDATECHATROOMLIST = "updateChatroomList"
const DISPLAYALLCHATROOMS = "displayAllChatrooms"
function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case GETCHATROOMMESSAGES: {
      const newState = { ...action.payload };
      return newState;
    }
    case UPDATEMESSAGES: {
      const newState = {...action.payload };
      return newState;
    }
    case UPDATEVOICEMESSAGE: {
      const messages = [...state.messages, action.payload];
      return { ...state, messages: [...messages]};
      }
    default:
      return state;
  }
}
function ChatroomListReducer(state = initalChatroomList, action) {
  switch (action.type) {
    case UPDATECHATROOMLIST: {
      return {...state, chatroomList:[action.payload,...state.chatroomList]};
    }
    case DISPLAYALLCHATROOMS: {
      return {...state, chatroomList:[...action.payload]}
      }
    default:
      return state;
  }
}
const Reducer = combineReducers({
  ChatReducer,
  ChatroomListReducer
})
export default Reducer;
