import moment from 'moment'
export function MessageTo({ message }) {
  const prettyTimestamp = moment(new Date(+message.timeStamp)).format("LT");
  const checkGrammar = function () {
    console.log(message);
    console.log("clicked");
  }
  return (
    <>
      <div className="message_container ">
        <div className="message_to">
          <div className="right_message">
            <div className='right_message_layout'>
                <div className="right_message_text message_text">{message.text}</div>
              <div className='grammar_response'>I found a lot mistake with your grammar, you should be ashame dof your self and this is beyond repair.
                </div>
             </div>
            <div className="message_timeStamp">{prettyTimestamp}</div>
            <div>
              <a href="#" className="right_message_grammar"
              onClick={(checkGrammar)}>
                check grammar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}