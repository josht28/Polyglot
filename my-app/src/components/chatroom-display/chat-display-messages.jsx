export function ChatDisplayMessage() {
  return (
    <>
      <div className="message_wrapper">
        <div className="message_container">
          <div className="message_from">
            <div className="left_message_user">user image</div>
            <div className="left_message">
              <div className="left_message_text">
                Hey there! this is a test message
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
              <div className="message_timeStamp"> time stamp</div>
            </div>
          </div>
        </div>
        <div className="message_container ">
          <div className="message_to">
            <div className="right_message">
              <div className="right_message_text">
                Hey there! this is a test message
              </div>
              <div className="message_timeStamp">time stamp</div>
              <div>
                <a href="#" className="right_message_grammar">
                  check grammar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
