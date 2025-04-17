import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css'

import Start from "./start/start"; // Import Signup page



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;
