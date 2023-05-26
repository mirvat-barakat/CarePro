import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import { Routes, Route, Router } from "react-router-dom";

function App() {
  <Router>
     <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="*" element={<div>404</div>} />
     </Routes>

  </Router>
 }  

export default App;