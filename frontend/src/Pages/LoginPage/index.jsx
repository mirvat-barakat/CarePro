import React from "react";
import Login from "../../Components/Login";
import Register from "../../Components/Register";
import "./styles.css";

const LoginPage = () => {

  return (
    <div className="background">
        <div className="block">
        <div className="image-select">
          <div className="image-select-left">
            <img src="d.svg" alt="Left Image" />
          </div>
          <div className="image-select-middle">
            <div className="option-box patient" >
              <h2>Patients</h2>
            </div>
            <div className="option-box doctor" >
              <h2>Doctors</h2>
            </div>
          </div>
          <div className="image-select-right">
            <img src="patients.jpg" alt="Right Image" />
          </div>
        </div>
        </div>
    </div>
  );
};

export default LoginPage;