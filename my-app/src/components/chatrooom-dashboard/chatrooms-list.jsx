import { useEffect} from "react";
import { getChatrooms} from "../../ApiService";
import { Chatroom } from "./chatroom";
import { useDispatch } from "react-redux";

export function ChatroomsList({ chatroomList, setChatroomList }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // get all the chatrooms on initiation
    (async () => {
      let chatrooms = await getChatrooms();
      // display the first chatroom messages
      dispatch({ type: "getChatRoomMessages", payload: chatrooms[0] });
      // update the list of chatrooms
      setChatroomList([...chatrooms]);
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
