import React, { useState } from "react";
import './styles.css';

const PatientProfileForm = ({ profile }) => {
  const [comments, setComments] = useState("");
  const [medications, setMedications] = useState("");
  const [notes, setNotes] = useState("");
  console.log(profile);
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

    setComments("");
    setMedications("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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
      <div >
        <label>Doctor's Notes:</label>
        <ul>
          {profile.doctorNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
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
        <textarea value={medications} onChange={handleNotesChange}></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PatientProfileForm;