import moment from 'moment'
export function MessageTo({ message }) {
   const prettyTimestamp = moment(new Date(+message.timeStamp)).format("LT");
  return (
    <>
      <div className="message_container ">
        <div className="message_to">
          <div className="right_message">
            <div className="right_message_text mesage_text">{message.text}</div>
            <div className="message_timeStamp">{prettyTimestamp}</div>
            <div>
              <a href="#" className="right_message_grammar">
                check grammar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}