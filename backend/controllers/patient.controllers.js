const Patient = require('../Models/patientsModel');
const User = require('../Models/userModel');


exports.addPatientInformation = async (req, res) => {
    const { id: user_id } = req.params;
    const {
      dateOfBirth,
      address,
      medicalcondition,
      symptoms,
      allergies,
      medications,
      preExistingConditions,
      pastSurgeries,
      familyMedicalHistory,
      notes,
    } = req.body;

      const user = await User.findById( user_id );
  
      if (!user) {
        return res.status(404).json({ error: 'Patient not found' });
      }

      const patient = new Patient();
      patient.user_id = user_id;
      patient.dateOfBirth = dateOfBirth;
      patient.address = address;
      patient.medicalcondition = medicalcondition;
      patient.symptoms = symptoms;
      patient.allergies = allergies;
      patient.medications = medications;
      patient.preExistingConditions = preExistingConditions;
      patient.pastSurgeries = pastSurgeries;
      patient.familyMedicalHistory = familyMedicalHistory;
      patient.notes = notes;
  
      await patient.save();
      
      res.json({
        status: "success",
        message: 'Patient information added successfully',
        patient: patient
      });
  };

  exports.getDoctorReport = async (req, res) => {
    const { id: user_id  } = req.params;
  
    try {
      const patient = await Patient.findOne({ user_id }, 'd_medications d_note d_comment');
  
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
  
      res.json({
        status: "success",
        patient: patient
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve patient profile' });
    }
  };