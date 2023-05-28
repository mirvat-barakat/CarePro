import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import PatientsPage from './Pages/PatientsPage';
import DoctorsPage from './Pages/DoctorsPage';

function App() {
  return(
    <Router>
     <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/patients" element={<PatientsPage />} />
       <Route path="/doctors" element={<DoctorsPage />} />
     </Routes>
    </Router>
  );
  
 }  

export default App;
