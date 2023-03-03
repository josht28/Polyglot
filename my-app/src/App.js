import './App.css';
import { UserProfile } from './components/userProfile';
import { ChatDisplayContainer } from './components/chatroom-display/chatDisplayContainer';
import { ChatroomsDashboard } from './components/chatrooom-dashboard/chatroomsDashboard';
function App() {
  return (
    <>
      <div className='app-dashboard'>
        <UserProfile />
        <ChatroomsDashboard />
        <ChatDisplayContainer />
      </div>

    </>
)
}

export default App;
