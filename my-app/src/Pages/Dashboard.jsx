import { UserProfile } from "../components/userProfile";
import { ChatDisplayContainer } from "../components/chatroom-display/chatDisplayContainer";
import { ChatroomsDashboard } from "../components/chatrooom-dashboard/chatroomsDashboard";

export function Dashboard () {
  return (
    <>
      <div className="app-dashboard">
      <UserProfile />
      <ChatroomsDashboard/>
      <ChatDisplayContainer />

      </div>
  </>
)
}