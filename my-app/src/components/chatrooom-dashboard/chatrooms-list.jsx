import { useEffect} from "react";
import { getChatrooms} from "../../ApiService";
import { Chatroom } from "./chatroom";
import { useDispatch,useSelector } from "react-redux";

export function ChatroomsList() {
  const dispatch = useDispatch();
  const chatroomList = useSelector((state) => state.ChatroomListReducer.chatroomList);
  useEffect(() => {
    // get all the chatrooms on initiation
    (async () => {
      let chatrooms = await getChatrooms();
      // sort the chatrooms based on when the last message was sent
      const sortedChatrooms = chatrooms.sort(function (first, second) {
        return (
            second.messages.slice(-1)[0].timeStamp -
            first.messages.slice(-1)[0].timeStamp
          );
        })
      // update the list of chatrooms
     dispatch({type:"displayAllChatrooms",payload: sortedChatrooms})
      // display the first chatroom messages
      dispatch({ type: "getChatRoomMessages", payload: sortedChatrooms[0]});
    })();
  }, []);


  return (
    <>
      <div className="chatrooms_list">
        {chatroomList.map((chatroom) => {
          return (
            <Chatroom
              className="eachChatroom"
              key={chatroom.chatroomId}
              chatroom={chatroom}
            />
          );
        })}
      </div>
    </>
  );
}
