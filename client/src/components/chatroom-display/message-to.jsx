import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { checkGrammar,translateGrammar } from "../../ApiService";
export function MessageTo({ message }) {
  const prettyTimestamp = moment(new Date(+message.timeStamp)).format("LT");
  const [RevealGrammar, SetRevealGrammar] = useState(false);
  const [GrammarResponse, SetGrammarResponse] = useState("");
  const [GrammarTranslation, SetGrammarTranslation] = useState("");
  const [TranslationExists, SetTranslationExists] = useState(false);

  const targetLanguage = useSelector((state) => state.ChatReducer.targetLanguage);
  const nativeLanguage = useSelector((state) => state.ChatReducer.nativeLanguage);
  const amICorrect = async function () {

    // if the response was already generated serve that to the user else make an API call
    if (GrammarResponse === "") {
      message.targetLanguage = targetLanguage;
      let response = await checkGrammar(message);
      SetGrammarResponse(response);
      SetRevealGrammar(!RevealGrammar);
    } else {
      SetRevealGrammar(!RevealGrammar);
    }
  };

  const helpMeUnderstand = async function () {
    if (GrammarTranslation === "") {
      let data = {
        nativeLanguage: nativeLanguage,
        text:GrammarResponse
      }
      let translatedText = await translateGrammar(data);
      SetGrammarTranslation(translatedText)
      SetTranslationExists(!TranslationExists);
    }
    else {
      SetTranslationExists(!TranslationExists);
    }
  };
  return (
    <>
      <div className="message_container ">
        <div className="message_to">
          <div className="right_message">
            {message.audio === "" ? (
              <div className="right_message_layout">
                <div className="right_message_text message_text">
                  {message.text}
                </div>
                {RevealGrammar ? (
                  <>
                    {TranslationExists ? (
                      <div className="grammar_response">
                        {GrammarTranslation}
                      </div>
                    ) : (
                      <div className="grammar_response">{GrammarResponse}</div>
                    )}{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div className="right_message_layout">
                <div className="right_message_audio ">
                  <audio
                    className="message_audio"
                    src={message.audio}
                    controls="controls"
                  />
                </div>
                {RevealGrammar ? (
                  <>
                    {TranslationExists ? (
                      <div className="grammar_response">
                        {GrammarTranslation}
                      </div>
                    ) : (
                      <div className="grammar_response">{GrammarResponse}</div>
                    )}{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
            )}

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
