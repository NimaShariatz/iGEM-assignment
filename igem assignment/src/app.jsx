import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css'

import Login from "./login/login"; // Import Signup page



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
