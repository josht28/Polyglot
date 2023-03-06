import { ChatroomsHeader } from "./chatrooms-header"
import { ChatroomsList } from "./chatrooms-list"
export function ChatroomsDashboard() {
  return (
    <>
      <div className="chatrooms_display">
        <ChatroomsHeader/>
        <div className="chatroom_list_background">
          <ChatroomsList
          />
        </div>
      </div>
    </>
  );
 }