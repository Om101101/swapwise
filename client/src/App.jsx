import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Dashboard from "./pages/private/Dashboard";
import Chat from "./pages/private/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} /> {/* ✅ fixed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
