import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from "./LanguageContext";
import LanguageSelect from "../src/Components/SelectLanguaage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import PatientsPage from "./Pages/PatientsPage";
import DoctorsPage from "./Pages/DoctorsPage";
import ResponsePage from "./Pages/ResponsePage";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <LanguageSelect />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/patient" element={<ResponsePage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
