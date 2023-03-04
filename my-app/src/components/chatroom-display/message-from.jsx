import moment from "moment";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { translateText } from "../../ApiService";
export function Messagefrom({ message, AI_image }) {
  const prettyTimestamp = moment(new Date(+message.timeStamp)).format("LT");
  // creating states to see if translate was requested
  const [ShowTranslation, setShowTranslation] = useState(false);
  const targetLanguage = useSelector((store) => store.targetLanguage);
  const nativeLanguage = useSelector((store) => store.nativeLanguage);
  const chatroomId = useSelector((store) => store.chatroomId);
  const dispatch = useDispatch();

  const translateMessage = async function (e) {
    // check if translation already exists
    if (!(message.translatedText === "")) {
setShowTranslation(!ShowTranslation);
    } else {
      message.targetLanguage = targetLanguage;
      message.nativeLanguage = nativeLanguage;
      message.chatroomId = chatroomId;
        const result = await translateText(message);
// update the state and show the translation to the user
      dispatch({ type: "updatemessages", payload: result });
      setShowTranslation(!ShowTranslation);

    }

    // flag to show the translated message
    //   setShowTranslation((prevState) => !prevState);
  };
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
            {!ShowTranslation ? (
              <div className="left_message_text message_text">
                {message.text}
              </div>
            ) : (
              <div className="left_message_text translated_text">
                {message.translatedText}
              </div>
            )}

            <div>
              {ShowTranslation ? (
                <a
                  href="#"
                  className="message_translate"
                  onClick={translateMessage}
                >
                  Show original
                </a>
              ) : (
                <a
                  href="#"
                  className="message_translate"
                  onClick={translateMessage}
                >
                  Translate
                </a>
              )}
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
