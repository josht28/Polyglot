import { useEffect, useState } from "react";
import { getChatrooms} from "../../ApiService";
import { Chatroom } from "./chatroom";

export function ChatroomsList() {
  const [chatroomList, setChatroomList] = useState([]);
  useEffect(() => {
    // get all the chatrooms on initiation
    (async () => {
      let chatrooms = await getChatrooms();
      setChatroomList([...chatrooms]);
    })();
  }, []);



  return (
    <>
      <div className="chatrooms_list">
        {chatroomList.map((chatroom) => {
          return (
            <Chatroom
              key={chatroom._id}
              chatroom={chatroom}
            />
          );
        })}
      </div>
    </>
  );
}
