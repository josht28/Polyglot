import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveMessage, AIresponse } from "../../ApiService";
import { v4 as uuidv4 } from "uuid";
export function ChatDisplayFooter() {
  const data = useSelector((state) => state);
  const senderId = data.userId;
  const chatroomId = data.chatroomId;
  const targetLanguage = data.targetLanguage;
  const dispatch = useDispatch();
  const handleClick = async function (e) {
    e.preventDefault();
    const text = e.target.message.value;
    // create a unique message id
    const messageId = uuidv4();
    // create the data to be send to the database
    const data = {
      chatroomId: chatroomId,
      user_name: "Josh",
      targetLanguage:targetLanguage,
      messages: {
        messageId: messageId,
        senderId: senderId,
        senderName: "Josh",
        timeStamp: Date.now(),
        text: text,
        translatedText: "",
      },
    };
    const chatroomDetail = await saveMessage(data);
    console.log(chatroomDetail);

    // update the message on the front end
    dispatch({ type: "updatemessages", payload: chatroomDetail});

    // make a response call to ChatGPT and display the new message
    const response = await AIresponse(chatroomDetail);

    dispatch({ type: "updatemessages", payload: response });
  };
  return (
    <>
      <form className="message_footer_wrapper" onSubmit={handleClick}>
        <input
          className="footer_input"
          type="text"
          name="message"
          placeholder="Type a message here"
        ></input>
        <button className="footer_button"> send button </button>
      </form>
    </>
  );
}
