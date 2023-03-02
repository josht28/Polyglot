import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
export function ChatDisplayFooter() {
  const data = useSelector((state) => state);
  const handleClick = function (e) {
    e.preventDefault();
    const text = e.target.message.value;
    // create a unique message id
    const messageId = uuidv4();
    console.log(messageId);
    // create the data to be send to the database
    const message = {
      messageId: messageId,
      senderId: data.senderId,
      senderName:"",
      timeStamp: Date.now(),
      text: text,
      translatedText: "",
    };


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
