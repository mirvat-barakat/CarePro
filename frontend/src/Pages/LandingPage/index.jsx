import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LandingPage = () => {


  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/login");
  }

  return (
    <div className="main1">
      <div className="text-container">
        <img src={"button.png"} alt="Background" className="icon"/> 
        <p className="h1">Your Health is our priority</p>
        <p className="quote">"Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided." - Paracelsus</p>
        <button onClick={handleClickButton}>Get Started</button>
      </div>
      <img src={"backgroundimage.jpg"} alt="Background" />
    </div>
  );
};

export default LandingPage;