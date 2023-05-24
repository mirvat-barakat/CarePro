import './App.css';
import LandingPage from '././Pages/LandingPage';
import { Routes, Route, Router } from "react-router-dom";

function App() {
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
}

export default App;
