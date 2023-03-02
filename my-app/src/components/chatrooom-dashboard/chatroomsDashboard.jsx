import { ChatroomsHeader } from "./chatrooms-header"
import { ChatroomsList } from "./chatrooms-list"
import { useState } from "react";
export function ChatroomsDashboard() {
  const [chatroomList, setChatroomList] = useState([]);
  return (
    <>
      <div className="chatrooms_display">
        <ChatroomsHeader setChatroomList={setChatroomList} />
        <ChatroomsList
          chatroomList={chatroomList}
          setChatroomList={setChatroomList}
        />
      </div>
    </>
  );
 }