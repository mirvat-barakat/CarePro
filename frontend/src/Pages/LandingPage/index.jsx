import React from "react";
import Login from "../../Components/Login";
import "./styles.css";

const LandingPage = () => {

  return (
    <div className="main">
      <div className="text-container">
        <h1>Title</h1>
        <p>Some text content goes here...</p>
        <button>Get Started</button>
      </div>
      <img src={"backgroundimage.jpg"} alt="Background" />
    </div>
  );
};

export default LandingPage;