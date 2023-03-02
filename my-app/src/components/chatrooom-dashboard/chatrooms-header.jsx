export function ChatroomsHeader() {
  const createChat = function (e) {
    console.log("click");
  }
  return (
    <>
      <div className="chatrooms_header_wrapper">
        <div className="chatrooms_header_details">
          <h2>Chats</h2>
          <button onClick={createChat}> + Create New Chat</button>
        </div>
        <div>
          <input
            className="chatrooms_search"
          placeholder="Search"></input>
        </div>
      </div>
    </>
  );
}
