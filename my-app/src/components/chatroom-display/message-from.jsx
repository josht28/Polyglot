import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { translateText } from "../../ApiService";
import { Image } from "cloudinary-react";

export function Messagefrom({ message, AI_image }) {
  const prettyTimestamp = moment(new Date(+message.timeStamp)).format("LT");
  // creating states to see if translate was requested
  const [ShowTranslation, setShowTranslation] = useState(false);
  const targetLanguage = useSelector(
    (store) => store.ChatReducer.targetLanguage
  );
  const nativeLanguage = useSelector(
    (store) => store.ChatReducer.nativeLanguage
  );
  const chatroomId = useSelector((store) => store.ChatReducer.chatroomId);
  const dispatch = useDispatch();
  const audio = message.audio;

  const translateMessage = async function (e) {
    // check if translation already exists
    if (message.translatedText !== "") {
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
      {message.audio === "" ? (
        <div className="message_container">
          <div className="message_from">
            <div className="left_message_user">
              <Image
                cloudName="dayg41e9c"
                publicId={AI_image}
                width="40"
                height="40"
                radius="max"
              />
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
              <div className="message_timeStamp"> {prettyTimestamp}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="message_container">
          <div className="message_from">
            <div className="left_message_user">
              <Image
                cloudName="dayg41e9c"
                publicId={AI_image}
                width="40"
                height="40"
                radius="max"
              />
            </div>
            <div className="left_message">
              {!ShowTranslation ? (
                <div className="left_message_audio">
                  <audio
                    className="message_audio"
                    src={audio}
                    controls="controls"
                  />
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
              <div className="message_timeStamp"> {prettyTimestamp}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

//
