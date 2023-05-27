import React, { useState} from "react";
import Login from "../../Components/Login";
import Register from "../../Components/Register";
import "./styles.css";

const LoginPage = () => {

  const [showForm, setShowForm] = useState(false);

  const handlePatientsClick = () => {
    setShowForm(true);
  };

  return (
    <div className="background">
        <div className="block">
        <div className="image-select">
          <div className="image-select-left">
            <img src="d.svg" alt="Left Image" />
          </div>
          <div className="image-select-middle">
            <div className="option-box patient" onClick={handlePatientsClick}>
              <h2>Patients</h2>
            </div>
            <div className="option-box doctor"  onClick={handlePatientsClick}>
              <h2>Doctors</h2>
            </div>
          </div>
          <div className="image-select-right">
            <img src="patients.jpg" alt="Right Image" />
          </div>
        </div>
        </div>
        {showForm && (
          <Login />
          )}
    </div>
  );
};

export default LoginPage;