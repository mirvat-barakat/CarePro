import React, { useState} from "react";
import Login from "../../Components/Login";
import LoginD from "../../Components/LoginA";
import "./styles.css";
import i18n from "../../i18n";

const LoginPage = () => {

  const [showForm, setShowForm] = useState(false);
  const [showDForm, setShowDForm] = useState(false);


  const handlePatientsClick = () => {
    setShowForm(true);
  };

  const handleDoctorsClick = () => {
    setShowDForm(true);
  };

  const handleCancel= ()=>{
    setShowForm(false);
    setShowDForm(false);
  }

  return (
    <div className="background">
        <div className="block">
        <div className="image-select">
          <div className="image-select-left">
            <img src="d.svg" alt="Left Image" />
          </div>
          <div className="image-select-middle">
            <div className="option-box patient" onClick={handlePatientsClick}>
              <h2>{i18n.t("patientOptionText")}</h2>
            </div>
            <div className="option-box doctor"  onClick={handleDoctorsClick}>
              <h2>{i18n.t("doctorOptionText")}</h2>
            </div>
          </div>
          <div className="image-select-right">
            <img src="patients.jpg" alt="Right Image" />
          </div>
        </div>
        </div>
        {showForm && (
          <div className="add-form-backdrop">
          <Login onSubmit={handleCancel}/>
          </div>
          )}
        {showDForm && (
          <div className="add-form-backdrop">
          <LoginD onSubmit={handleCancel}/>
          </div>
          )}
    </div>
  );
};

export default LoginPage;