import React from "react";
import Login from "../../Components/Login";
import "./styles.css";

const LandingPage = () => {

  return (
    <div className="main">
      <div className="text-container">
        <p className="h1">Your Health is our priority</p>
        <p className="quote">"Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided." - Paracelsus</p>
        <button>Get Started</button>
      </div>
      <img src={"backgroundimage.jpg"} alt="Background" />
    </div>
  );
};

export default LandingPage;