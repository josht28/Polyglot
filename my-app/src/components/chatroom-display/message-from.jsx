import moment from 'moment'
import { useEffect, useState } from 'react';
import { translateText } from '../../ApiService';
export function Messagefrom({ message, AI_image }) {
    const prettyTimestamp = moment(new Date(+message.timeStamp)).format(
    "LT"
    );
// creating states to see if translate was requested
  const [ShowTranslation,setShowTranslation] = useState(false)
  const translateMessage = async function (e) {
    console.log("click");
    console.log(message);
    // await translateMessage(message);
    // flag to show the translated message
    setShowTranslation((prevState) => !prevState);
  }
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
              <a href="#" className="message_translate"
              onClick={translateMessage}>
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