export function Chatroom() {
  return (
    <>
      <div className="chatroom_wrapper">
        <div className="chatroom_details">
          <div className="chatroom_user_details">
            <div> user image</div>
            <div> user name</div>
          </div>
          <div> last message timestamp</div>
        </div>
        <div>
          <div className="chatroom_lastmessage">Lets go!</div>
        </div>
      </div>
      <div className="chatroom_wrapper">
        <div className="chatroom_details">
          <div className="chatroom_user_details">
            <div> user image</div>
            <div> user name</div>
          </div>
          <div> last message timestamp</div>
        </div>
        <div>
          <div className="chatroom_lastmessage">Hey this was the last message i wrote to your</div>
        </div>
      </div>
    </>
  );
}
