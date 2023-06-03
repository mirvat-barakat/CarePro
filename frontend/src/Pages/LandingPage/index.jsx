import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import i18n from "../../i18n";
import i18next from "i18next";

const LandingPage = () => {
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    localStorage.setItem("lang", selectedOption);
    i18n.changeLanguage(selectedOption);
  };

  const lang = localStorage.getItem("lang") || "en";
  const navigate = useNavigate();

  i18n.changeLanguage(lang);

  const handleClickButton = () => {
    navigate("/login");
  };

  return (
    <div className="main1">
      
      <div className="text-container">
        <select onChange={handleChange} value={lang} className="options">
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
        <img src={"button.png"} alt="Background" className="icon" />
        <p className="h1">{i18n.t("your_health")}</p>
        <p className="quote">
          {i18n.t("medicine_art")} - Paracelsus
        </p>
        <button onClick={handleClickButton}>
          {i18n.t("get_started")}
        </button>
      </div>
      <img src={"backgroundimage.jpg"} alt="Background" />
    </div>
  );
};

export default LandingPage;