import { getChatroomMessages } from "../../ApiService";
import { useDispatch} from "react-redux";
import moment from "moment";

export function Chatroom({ chatroom}) {
  const dispatch = useDispatch();

  const chatroomId = chatroom.chatroomId;
  const lastReceivedMessage = chatroom.messages.slice(-1)[0].text;
  const lastReceivedMessageTimeStamp = chatroom.messages.slice(-1)[0].timeStamp;
  const prettyTimestamp = moment(new Date(+lastReceivedMessageTimeStamp)).format(
    "LT"
  );
  const retrieveChatMessages = async function (e) {
     // get the whole chatroom messages
    const chatroom = await getChatroomMessages(chatroomId);
 // update the global state with the selected chatroom details
     dispatch({ type: "getChatRoomMessages",payload:chatroom[0]});

   };
  return (
    <>
      <div className="chatroom_wrapper" onClick={retrieveChatMessages}>
        <div className="chatroom_details">
          <div className="chatroom_user_details">
            <div className="chatroom_user_image">
              <img className="AI_image" src={require(`../../pics/${chatroom.AI_image}.png`)}></img></div>
            <div> {chatroom.AI_name}</div>
          </div>
          <div className="chatroom_date"> {prettyTimestamp}</div>
        </div>
        <div>
          <div className="chatroom_lastmessage">{ lastReceivedMessage}</div>
        </div>
      </div>

    </>
  );
}
