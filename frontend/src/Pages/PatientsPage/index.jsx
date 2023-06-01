import React, { useState } from "react";
import PatientsForm from "../../Components/PatientsData";
import Confirmation from "../../Components/ConfirmationDialog";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const LoginP = () => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const navigate = useNavigate();

  function handleLogoutClick(){
    setShowLogoutDialog(true);
}

function handleLogoutCancel() {
    setShowLogoutDialog(false);
}

const handleLogout = () => {
      
  localStorage.clear();
  navigate("/login");
}

  return (
    <div className="ppage">
      <button className="button" onClick={handleLogoutClick}>Logout</button>
      <PatientsForm />
      {showLogoutDialog && (
                <div className="add-form-backdrop">
                            <Confirmation
                            message="Are you sure you want to logout?"
                            onCancel={handleLogoutCancel}
                            onConfirm={handleLogout}
                            /></div>)}
    </div>
    
  );
};

export default LoginP;