
import { createChatRoom } from "../../ApiService";
import { v4 as uuidv4 } from "uuid";
export function ChatroomsHeader({setChatroomList}) {
const chatroomId= uuidv4();
  const createChat = async function (e) {
    console.log("click");
    const data = {
      chatroomId: chatroomId,
      AI_id: "ChatGPTEnglish",
      language: "English",
      AI_image: "AI Image",
      AI_name: "William",
      userId: "josh",
      user_name: "Josh",
      NativeLanguage: "French",
      messages: []
    }
    let chatrooms = await createChatRoom(data);
    setChatroomList([...chatrooms]);
  }
  return (
    <>
      <div className="chatrooms_header_wrapper">
        <div className="chatrooms_header_details">
          <h2 className="polyglot_logo">Chats</h2>
          <button className="create_chat" onClick={createChat}> + Create New Chat</button>
        </div>
        <div className="chatroom_search_wrapper">
          <input
            className="chatrooms_search"
          placeholder="Search"></input>
        </div>
      </div>
    </>
  );
}
