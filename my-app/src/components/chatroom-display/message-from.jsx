import moment from "moment";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { translateText } from "../../ApiService";
export function Messagefrom({ message, AI_image }) {
  const prettyTimestamp = moment(new Date(+message.timeStamp)).format("LT");
  // creating states to see if translate was requested
  const [ShowTranslation, setShowTranslation] = useState(false);
  const [translation, setTranslation] = useState("");

  const targetLanguage = useSelector((store) => store.targetLanguage);
  const nativeLanguage = useSelector((store) => store.nativeLanguage);
  const chatroomId = useSelector((store) => store.chatroomId);

  const translateMessage = async function (e) {
    // check if translation already exists
    if (!(message.translatedText === "")) {
      console.log("here");
      setShowTranslation(!ShowTranslation);
      console.log(ShowTranslation);
    } else {
      console.log(message.translatedText);
      message.targetLanguage = targetLanguage;
      message.nativeLanguage = nativeLanguage;
      message.chatroomId = chatroomId;
      console.log(message);
      //   const result = await translateText(message);
      //   console.log(result);
    }

    // flag to show the translated message
    //   setShowTranslation((prevState) => !prevState);
  };
  useEffect(() => {
    console.log(ShowTranslation);
  });
  return (
    <>
      <div className="message_container">
        <div className="message_from">
          <div className="left_message_user">
            <img
              className="AI_image"
              src={require(`../../pics/${AI_image}.png`)}
            ></img>
          </div>
          <div className="left_message">
            <div className="left_message_text mesage_text">{message.text}</div>
            <div>
              <a
                href="#"
                className="message_translate"
                onClick={translateMessage}
              >
                Translate
              </a>
            </div>
            <div>
              <a href="#" className="message_grammar">
                check grammar
              </a>
            </div>
            <div className="message_timeStamp"> {prettyTimestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
}
