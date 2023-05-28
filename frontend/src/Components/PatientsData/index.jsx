import React , {useState} from 'react';
import "./styles.css";

const PatientsForm = () => {

    const [formData, setFormData] = useState({
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
         <div className='form-container' >
      <h2>ICE Patients Data Form</h2>
      <form  >
        <div className='form-container'>
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
        </div>
        <div className='form-container'>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <div className='form-container'>
          <label>Allergies:</label>
          <input type="text" name="allergies" value={formData.allergies} onChange={handleInputChange} required />
        </div>
        <div className='form-container'>
          <label>Medications:</label>
          <input type="text" name="medications" value={formData.medications} onChange={handleInputChange} required />
        </div>
        <div className='form-container'>
          <label>Pre Existing Conditions:</label>
          <input type="text" name="preExistingConditions" value={formData.preExistingConditions} onChange={handleInputChange} required />
        </div>
        <div className='form-container'>
          <label>Past Surgeries:</label>
          <input type="text" name="pastSurgeries" value={formData.pastSurgeries} onChange={handleInputChange} required />
        </div>
        <div className='form-container'>
          <label>Family Medical History:</label>
          <input type="text" name="familyMedicalHistory" value={formData.familyMedicalHistory} onChange={handleInputChange} required />
        </div>
        <div className='form-container'>
          <label>Notes:</label>
          <input type="text" name="notes" value={formData.notes} onChange={handleInputChange} required />
        </div>
      </form>
      <button type="submit">Submit</button>
    </div>
    </>
  );
};

export default PatientsForm;