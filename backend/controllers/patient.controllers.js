const Patient = require('../Models/patientsModel');


exports.addPatientInformation = async (req, res) => {
    const { id: user_id } = req.params;
    const {
      dateOfBirth,
      address,
      allergies,
      medications,
      preExistingConditions,
      pastSurgeries,
      familyMedicalHistory,
      notes,
    } = req.body;
  
    try {
      const patient = await User.findOne({ user_id });
  
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
      patient.user_id = user_id;
      patient.dateOfBirth = dateOfBirth;
      patient.address = address;
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
    } catch (error) {
      console.error();
      res.status(500).json({ error: 'Failed to add patient information' });
    }
  };