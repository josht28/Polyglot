import { useEffect,useState } from "react"
import {getChatrooms} from '../../ApiService'
import { Chatroom } from "./chatroom"


export function ChatroomsList() {
  const [chatroomList, setChatroomList] = useState([]);
  useEffect(() => {
   // get all the chatrooms on initiation
    (async () => {
      let chatrooms = await getChatrooms();
        console.log(chatrooms);
     setChatroomList([...chatroomList,...chatrooms])
    })();

}, []);

const retrieveChatMessages = function (e) {};

  return (
    <>
      <div className="chatrooms_list">
        {
          chatroomList.map((chatroom) => {
       return <Chatroom key={chatroom._id} chatroom = {chatroom} onClick = {retrieveChatMessages} />
          })
        }
      </div>

    </>
  )
}