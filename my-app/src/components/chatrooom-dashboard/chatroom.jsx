import { getChatroomMessages } from "../../ApiService";
import { useDispatch } from "react-redux";
export function Chatroom({ chatroom }) {
  const dispatch = useDispatch();
  const chatroomId = chatroom._id;
  const lastReceivedMessage = chatroom.messages.slice(-1)[0].text;
  const lastReceivedMessageTimeStamp = chatroom.messages.slice(-1)[0].timeStamp;
  console.log(lastReceivedMessage);
   const retrieveChatMessages = async function (e) {
     console.log("click");
     // get the whole chatroom messages
     console.log(chatroomId);
     const chatroom = await getChatroomMessages(chatroomId);
 // update the global state with the selected chatroom details
     dispatch({ type: "getChatRoomMessages",payload:chatroom });

   };
  return (
    <>
      <div className="chatroom_wrapper" onClick={retrieveChatMessages}>
        <div className="chatroom_details">
          <div className="chatroom_user_details">
            <div> {chatroom.AI_image}</div>
            <div> {chatroom.AI_name}</div>
          </div>
          <div> {lastReceivedMessageTimeStamp}</div>
        </div>
        <div>
          <div className="chatroom_lastmessage">{ lastReceivedMessage}</div>
        </div>
      </div>

    </>
  );
}
