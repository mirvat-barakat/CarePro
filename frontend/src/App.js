import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';


function App() {
  return(
    <Router>
     <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="*" element={<div>404</div>} />
     </Routes>
    </Router>
  );
  
 }  

export default App;
