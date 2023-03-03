import './App.css';
import { UserProfile } from './components/userProfile';
import { ChatDisplayContainer } from './components/chatroom-display/chatDisplayContainer';
import { ChatroomsDashboard } from './components/chatrooom-dashboard/chatroomsDashboard';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare, faCoffee);

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
