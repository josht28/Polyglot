import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { checkGrammar } from "../../ApiService";
export function MessageTo({ message }) {
  const prettyTimestamp = moment(new Date(+message.timeStamp)).format("LT");
  // state to check if grammar needs to be checked
  const [RevealGrammar, SetRevealGrammar] = useState(false);
  // state for storing the response
  const [GrammarResponse, SetGrammarResponse] = useState("")

  const targetLanguage = useSelector((state) => state.targetLanguage);
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
      SetGrammarResponse(response)
      SetRevealGrammar(!RevealGrammar);
      console.log(RevealGrammar);
    }
    else {
      SetRevealGrammar(!RevealGrammar);
    }
  };
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
                <div className="grammar_response">
                  {GrammarResponse}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="message_timeStamp">{prettyTimestamp}</div>
            <div>
              <a
                href="#"
                className="right_message_grammar"
                onClick={amICorrect}
              >
                check grammar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
