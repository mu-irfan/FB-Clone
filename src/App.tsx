import "./App.css";
import Homepage from "./pages/Home/Homepage";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/main" element={<Homepage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
