import React , {useState} from 'react';
import "./styles.css";
import axios from 'axios';

const PatientsForm = () => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user_id, setId] = useState(localStorage.getItem("user_id"));

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [medicalcondition, setMedicalCondition] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [allergies, setAllergies] = useState("");
    const [preExistingConditions, setPreExistingConditions] = useState("");
    const [medications, setMedications] = useState("");
    const [pastSurgeries, setPastSurgeries] = useState("");
    const [familyMedicalHistory, setFamilyMedicalHistory] = useState("");
    const [notes, setNotes] = useState("");

      const handleSaveInformation = async() => {

        const data = {
          "dateOfBirth": dateOfBirth,
          "address": address,
          "medicalcondition": medicalcondition,
          "symptoms": symptoms,
          "allergies": allergies,
          "medications": medications,
          "preExistingConditions": preExistingConditions,
          "pastSurgeries": pastSurgeries,
          "familyMedicalHistory": familyMedicalHistory,
          "notes": notes,
        }
        const config = {
          method: "Post",
          data:data,
          url: `http://localhost:3000/patient/${user_id}/addPatientInformation`,
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
            setFormSubmitted(true);
          }
        } catch (error) {
          return error.response;
        }
    
      }

  return (
    <>
    {!formSubmitted && ( 
      <div className='form-container' >
      <h2> Patients Data Form</h2>
      <form  >
        <div className='form-container'>
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={(e) => {
                            setDateOfBirth(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Address:</label>
          <input type="text" name="address" value={address} onChange={(e) => {
                            setAddress(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Medical Condition:</label>
          <input type="text" name="medicalcondition" value={medicalcondition} onChange={(e) => {
                            setMedicalCondition(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Symptoms:</label>
          <input type="text" name="symptoms" value={symptoms} onChange={(e) => {
                            setSymptoms(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Allergies:</label>
          <input type="text" name="allergies" value={allergies} onChange={(e) => {
                            setAllergies(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Medications:</label>
          <input type="text" name="medications" value={medications} onChange={(e) => {
                            setMedications(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Pre Existing Conditions:</label>
          <input type="text" name="preExistingConditions" value={preExistingConditions} onChange={(e) => {
                            setPreExistingConditions(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Past Surgeries:</label>
          <input type="text" name="pastSurgeries" value={pastSurgeries} onChange={(e) => {
                            setPastSurgeries(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Family Medical History:</label>
          <input type="text" name="familyMedicalHistory" value={familyMedicalHistory} onChange={(e) => {
                            setFamilyMedicalHistory(e.target.value);
                          }} required />
        </div>
        <div className='form-container'>
          <label>Notes:</label>
          <input type="text" name="notes" value={notes} onChange={(e) => {
                            setNotes(e.target.value);
                          }} required />
        </div>
      </form>
      <button type="submit" onClick={handleSaveInformation}>Submit</button>
    </div>
    )}
    {formSubmitted && <p>Form submitted successfully!</p>}
    </>
  );
};

export default PatientsForm;