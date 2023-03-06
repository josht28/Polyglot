import "./App.css";
import { Dashboard } from "./Pages/Dashboard";
import { CreateChat } from "./Pages/create-chat";
import { Route, Routes } from "react-router-dom";
function App() {
  https: return (
    <Routes>
      <Route path="/" element={<CreateChat />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
