import moment from 'moment'
export function Messagefrom({ message, AI_image }) {
    const prettyTimestamp = moment(new Date(+message.timeStamp)).format(
    "LT"
  );
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
              <a href="#" className="message_translate">
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