import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css'

import Start from "./start/start"; // Import starting page
import Marl_club from "./marl_club/marl_club"; // Import Marlboro club page




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/marlboro-club" element={<Marl_club />} />
      </Routes>
    </Router>
  );
}

export default App;
