import React , {useState} from 'react';
import "./styles.css";

const PatientsForm = () => {

    const [formData, setFormData] = useState({
        user_id: '',
        dateOfBirth: '',
        address: '',
        allergies: '',
        medications: '',
        preExistingConditions: '',
        pastSurgeries: '',
        familyMedicalHistory: '',
        notes: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

  return (
    <>
         <div>
      <h2>ICE Patients Data Form</h2>
      <form >
        <div>
          <label>User ID:</label>
          <input type="text" name="user_id" value={formData.user_id} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Allergies:</label>
          <input type="text" name="address" value={formData.allergies} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Medications:</label>
          <input type="text" name="address" value={formData.medications} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Pre Existing Conditions:</label>
          <input type="text" name="address" value={formData.preExistingConditions} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Past Surgeries:</label>
          <input type="text" name="address" value={formData.pastSurgeries} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Family Medical History:</label>
          <input type="text" name="address" value={formData.familyMedicalHistory} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Notes:</label>
          <input type="text" name="address" value={formData.notes} onChange={handleInputChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default PatientsForm;