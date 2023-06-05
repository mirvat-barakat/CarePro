import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from "./LanguageContext";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import PatientsPage from "./Pages/PatientsPage";
import DoctorsPage from "./Pages/DoctorsPage";
import ResponsePage from "./Pages/ResponsePage";
import PrivateRoutes from './privateRoutes';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/patient" element={<ResponsePage />} />
          </Route>
          
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
