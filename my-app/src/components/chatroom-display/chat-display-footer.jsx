import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveMessage, AIresponse } from "../../ApiService";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
export function ChatDisplayFooter() {
  const data = useSelector((state) => state);
  const senderId = data.userId;
  const chatroomId = data.chatroomId;
  const targetLanguage = data.targetLanguage;
  const dispatch = useDispatch();
  // state to handle the text input field
  const [Txt, SetTxt] = useState("");
  const changeTxt = function (event) {
    SetTxt(event.target.value);

  }

  const handleSubmit = async function (e) {
    e.preventDefault();
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
        text: Txt,
        translatedText: "",
      },
    };
    console.log("clicked");
    // reset the inout field
    SetTxt("");
    //save the message to the database
    const chatroomDetail = await saveMessage(data);

    // update the message on the front end
    dispatch({ type: "updatemessages", payload: chatroomDetail});

    // make a response call to ChatGPT and display the new message
    const response = await AIresponse(chatroomDetail);

    dispatch({ type: "updatemessages", payload: response });
  };
  return (
    <>
      <form className="message_footer_wrapper">
        <input
          className="footer_input"
          type="text"
          onChange={changeTxt}
          name="message"
          value={Txt}
          placeholder="Type a message here"
          autoComplete="off"
        ></input>
        <FontAwesomeIcon onClick={handleSubmit} icon={faPaperPlane} />
      </form>
    </>
  );
}
