import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import i18n from "../../i18n";
import LanguageSelect from "../../Components/SelectLanguaage";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/login");
  };

  return (
    <div className="main1">
      
      <div className="text-container">
        <LanguageSelect />
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