import React, { useState } from "react";
import './styles.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const PatientProfileForm = ({ profile, onClose  }) => {

  const [comments, setComments] = useState("");
  const [medications, setMedications] = useState("");
  const [notes, setNotes] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user_id, setId] = useState(localStorage.getItem("user_id"));
  const id = user_id.replace(/"/g, "");
  const [idVisible, setIdVisible] = useState(true);

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleMedicationsChange = (event) => {
    setMedications(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleIconClick = () => {
    setIdVisible(false);
  };

  const handleSaveDoctorInformation = async() => {

    const data = {
      "d_medications":medications, 
      "d_note":notes, 
      "d_comment":comments
    }
    const config = {
      method: "POST",
      data:data,
      url: `http://localhost:3000/doctor/${id}/addDoctorNote`,
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,

      },
    };
    try {
      const res = await axios(config);
      if (res.data.status == "success") {
        console.log("success");
      }
    } catch (error) {
      return error.response;
    }

  }

  return (
    <div >
            {idVisible && (
          <div >
          <form onSubmit={handleSubmit} className="form">
            <FontAwesomeIcon icon={faTimes} className="faicon1" onClick={handleIconClick}/>
            <div className="value">
              <label>Address: </label>
              <div>{profile.address}</div>
            </div>
            <div className="value">
              <label>Date of Birth: </label>
              <div>{profile.dateOfBirth}</div>
            </div>
            <div className="value">
              <label>Medical Condition: </label>
              <div>{profile.medicalcondition}</div>
            </div>
            <div className="value">
              <label>Symptoms: </label>
              <div>{profile.symptoms}</div>
            </div>
            <div className="value">
              <label>allergies: </label>
              <div>{profile.allergies}</div>
            </div>
            <div className="value">
              <label>medications: </label>
              <div>{profile.medications}</div>
            </div >
            <div className="value">
              <label>preExistingConditions: </label>
              <div>{profile.preExistingConditions}</div>
            </div>
            <div className="value">
              <label>pastSurgeries:</label>
              <div>{profile.pastSurgeries}</div>
            </div>
            <div className="value">
              <label>familyMedicalHistory:</label>
              <div>{profile.familyMedicalHistory}</div>
            </div>
            <div className="value">
              <label>notes: </label>
              <div>{profile.notes}</div>
            </div>
            <div className="doctor1">
            <div>
              <label>Comments:</label>
              <textarea value={comments} onChange={handleCommentsChange}></textarea>
            </div>
            <div>
              <label>Medications:</label>
              <textarea value={medications} onChange={handleMedicationsChange}></textarea>
            </div>
            <div>
              <label>Doctor's Notes:</label>
              <textarea value={notes} onChange={handleNotesChange}></textarea>
            </div>
            </div>

            <button type="submit" onClick={handleSaveDoctorInformation}>Save</button>
            </form>
          </div>
        )}
    </div>



  );
};

export default PatientProfileForm;