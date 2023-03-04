import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { checkGrammar } from "../../ApiService";
export function MessageTo({ message }) {
  const prettyTimestamp = moment(new Date(+message.timeStamp)).format("LT");
  // state to check if grammar needs to be checked
  const [RevealGrammar, SetRevealGrammar] = useState(false);
  // state for storing the response
  const [GrammarResponse, SetGrammarResponse] = useState("");

  // state to store the translation of the grammar explanation
  const [GrammarTranslation, SetGrammarTranslation] = useState("");

  const targetLanguage = useSelector((state) => state.targetLanguage);
  const nativeLanguage = useSelector((state) => state.nativeLanguage);
  const amICorrect = async function () {
    // if the response was already generated serve that to the user else make an API call
    if (GrammarResponse === "") {
      message.targetLanguage = targetLanguage;
      console.log(message);
      console.log("clicked");
      let response = await checkGrammar(message);
      console.log(response);
      // save this response and serve to the user
      // let response = "testing"
      SetGrammarResponse(response);
      SetRevealGrammar(!RevealGrammar);
      console.log(RevealGrammar);
    } else {
      SetRevealGrammar(!RevealGrammar);
    }
  };

  const helpMeUnderstand = function () {
    if (GrammarTranslation === "") {
      
    }
    else {

    }
  }
  return (
    <>
      <div className="message_container ">
        <div className="message_to">
          <div className="right_message">
            <div className="right_message_layout">
              <div className="right_message_text message_text">
                {message.text}
              </div>
              {RevealGrammar ? (
                <div className="grammar_response">{GrammarResponse}</div>
              ) : (
                ""
              )}
            </div>
            <div className="message_timeStamp">{prettyTimestamp}</div>
            <div>
              {RevealGrammar ? (
                <a
                  href="#"
                  className="right_message_grammar"
                  onClick={amICorrect}
                >
                  Hide
                </a>
              ) : (
                <a
                  href="#"
                  className="right_message_grammar"
                  onClick={amICorrect}
                >
                  {" "}
                  Check my grammar
                </a>
              )}
            </div>
            <div>
              {RevealGrammar ? (
                 <a
                  href="#"
                  className="right_message_traslate"
                  onClick={helpMeUnderstand}
                >
                  Help me understand in {nativeLanguage}
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
