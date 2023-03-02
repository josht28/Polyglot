export function Chatroom({ chatroom }) {
  console.log(chatroom);
  return (
    <>
      <div className="chatroom_wrapper">
        <div className="chatroom_details">
          <div className="chatroom_user_details">
            <div> {chatroom.AI_image}</div>
            <div> {chatroom.AI_name}</div>
          </div>
          <div> last message timestamp</div>
        </div>
        <div>
          <div className="chatroom_lastmessage">Lets go!</div>
        </div>
      </div>

    </>
  );
}
