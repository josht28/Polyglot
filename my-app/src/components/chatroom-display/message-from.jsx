export function Messagefrom ({message,AI_image}) {
  return (
    <>
      <div className="message_container">
        <div className="message_from">
          <div className="left_message_user">{AI_image}</div>
          <div className="left_message">
            <div className="left_message_text">
              {message.text}
            </div>
            <div>
              <a href="#" className="message_translate">
                Translate
              </a>
            </div>
            <div>
              <a href="#" className="message_grammar">
                check grammar
              </a>
            </div>
            <div className="message_timeStamp"> {message.timeStamp}</div>
          </div>
        </div>
      </div>
    </>
  );
}