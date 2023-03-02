import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveMessage } from "../../ApiService";
import { v4 as uuidv4 } from 'uuid';
export function ChatDisplayFooter() {
  const data = useSelector((state) => state);
  const senderId = data.userId;
  const name = data.AI_name
  const chatroomId = data.chatroomId;
  const handleClick = async function (e) {
    e.preventDefault();
    const text = e.target.message.value;
    // create a unique message id
    const messageId = uuidv4();
    console.log(messageId);
    console.log(chatroomId);
    console.log(senderId);
    // create the data to be send to the database
    const data = {
      chatroomId:chatroomId,
      messages: {
        messageId: messageId,
        senderId: senderId,
        senderName: "",
        timeStamp: Date.now(),
        text: text,
        translatedText: "",
      }
    };
    const message = await saveMessage(data);
    dispatchEvent({ type: 'updatemessages', payload: message });
  }
  return (
    <>
      <form className="message_footer_wrapper"
      onSubmit={handleClick}>
          <input className="footer_input"
          type="text"
          name="message"
            placeholder="Type a message here"></input>
          <button className="footer_button"> send button </button>
      </form>

    </>
  );
}
