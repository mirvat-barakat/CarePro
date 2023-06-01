import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Confirmation from "../../Components/ConfirmationDialog";

const ResponseP = () => {
    const [comments, setComments] = useState([]);
    const [notes, setNotes] = useState([]);
    const [medications, setMedications] = useState([]);
    const token = localStorage.getItem("token");
    const user_id= localStorage.getItem("user_id");
    const id = user_id.replace(/"/g, "");
    const navigate = useNavigate();
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

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

  const getUsers = {
    method: 'GET',
    url: `http://localhost:3000/patient/${id}/getDoctorReport`,
    headers: {
      'content-type': 'application/json',
      'Accept' : 'application/json',
      'Authorization': 'bearer ' + token
    },
  };

  useEffect(() => {
    axios.request(getUsers)
        .then(response => {
            setComments(response.data.patient.d_comment)
            setMedications(response.data.patient.d_medications)
            setNotes(response.data.patient.d_note)
            console.log(response);
        })
        .catch(function (error) {
          return error.response;
        });
  },[]);

  return (
    <div className="ppage1">
        <button className="button" onClick={handleLogoutClick}>Logout</button>
        <div className="form-container1">
            <h2>Doctor's Report</h2>
            <p className="text"><h3>Medications:</h3><br></br> {comments}</p>
            <p className="text"><h3>Comments:</h3><br></br>{medications}</p>
            <p className="text"><h3>Notes:</h3> <br></br>{notes}</p>
        </div>
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

export default ResponseP;