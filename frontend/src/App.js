import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return(
    <Router>
     <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/" element={<LandingPage />} />
       <Route path="/login" element={<LoginPage />} />
     </Routes>
    </Router>
  );
  
 }  

export default App;
