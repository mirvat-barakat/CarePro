import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from 'axios';
import Confirmation from "../../Components/ConfirmationDialog";
import PatientProfileForm from "../../Components/PatientProfile";
import { useNavigate } from "react-router-dom";

const DoctorsPage = () => {

    const [patients, setPatients] = useState([]);
    const token = localStorage.getItem("token");
    const [recordNumber, setRecordNumber] = useState(1);
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [patientProfile, setPatientProfile] = useState(null);

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

    const getUsers = {
        method: 'GET',
        url: 'http://localhost:3000/doctor/getPatients',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };
  
      useEffect(() => {
        axios.request(getUsers)
            .then(response => {
                setPatients(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
              return error.response;
            });
      },[]);
  
    const getPatientProfile = async() => {
      const user_id= localStorage.getItem("user_id");
      const id = user_id.replace(/"/g, "");

      const config = {
        method: "GET",
        url: `http://localhost:3000/doctor/${id}/getPatientProfile`,
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',

        },
      };
      try {
        const res = await axios(config);
        if (res.data.status == "success") {
          setPatientProfile(res.data.patient);
          console.log(patientProfile);
          setShowForm(true);
          
        }
      } catch (error) {
        return error.response;
      }
  
    }
  return (
    <>
    <div className="title1">
      <h1>Patients</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
    <div className="main1">
          <div className="text-container1">
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {patients.map((patient, index )=> (
              <tr key={patient.id} onClick={() => {
                localStorage.setItem('user_id', JSON.stringify(patient._id));
                getPatientProfile();
              }}>
                <td>{recordNumber + index}</td>
                  <td>{patient._id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <img src="doctors.jpg" className="dimg"></img>
      {showForm && patientProfile && (
        <PatientProfileForm profile={patientProfile} />
      )}
      {showLogoutDialog && (
                <div className="add-form-backdrop">
                            <Confirmation
                            message="Are you sure you want to logout?"
                            onCancel={handleLogoutCancel}
                            onConfirm={handleLogout}
                            /></div>)}
    </div>

  
    </>
    
  );
};

export default DoctorsPage;