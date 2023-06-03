import React from "react";
import "./styles.css";
import i18n from "../../i18n";

const LanguageSelect = () => {

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    localStorage.setItem("lang", selectedOption);
    i18n.changeLanguage(selectedOption);
    window.location.reload();
  };

  const lang = localStorage.getItem("lang") || "en";

  i18n.changeLanguage(lang);


  return (
    <div>
        <select onChange={handleChange} value={lang} className="select-language">
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSelect;