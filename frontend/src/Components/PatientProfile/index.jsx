import React, { useState } from "react";

const PatientProfileForm = ({ profile }) => {
  const [comments, setComments] = useState("");
  const [medications, setMedications] = useState("");

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleMedicationsChange = (event) => {
    setMedications(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions with the comments and medications
    // such as sending them to the server or updating the patient profile.

    // Reset the form fields
    setComments("");
    setMedications("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Address:</label>
        <div>{profile.address}</div>
      </div>
      <div>
        <label>Date of Birth:</label>
        <div>{profile.dateOfBirth}</div>
      </div>
      <div>
        <label>Doctor's Notes:</label>
        <ul>
          {profile.doctorNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      <div>
        <label>Family Medical History:</label>
        <div>{profile.familyMedicalHistory}</div>
      </div>
      <div>
        <label>Medical Condition:</label>
        <div>{profile.medicalcondition}</div>
      </div>
      <div>
        <label>Notes:</label>
        <div>{profile.notes}</div>
      </div>
      <div>
        <label>Comments:</label>
        <textarea value={comments} onChange={handleCommentsChange}></textarea>
      </div>
      <div>
        <label>Medications:</label>
        <textarea value={medications} onChange={handleMedicationsChange}></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PatientProfileForm;