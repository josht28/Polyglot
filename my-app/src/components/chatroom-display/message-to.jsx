export function MessageTo({message}) {
  return (
    <>
       <div className="message_container ">
          <div className="message_to">
            <div className="right_message">
              <div className="right_message_text">
             {message.text}
              </div>
            <div className="message_timeStamp">{message.timeStamp}</div>
              <div>
                <a href="#" className="right_message_grammar">
                  check grammar
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}