const Patient = require('../Models/patientsModel');


exports.addPatientInformation = async (req, res) => {
    const { user_id } = req.params;
    const {
      dateOfBirth,
      address,
      allergies,
      medications,
      preExistingConditions,
      pastSurgeries,
      familyMedicalHistory,
      notes,
      testResults,
      documents
    } = req.body;
  
    try {
      const patient = await Patient.findOne({ user_id });
  
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
  
      patient.dateOfBirth = dateOfBirth;
      patient.address = address;
      patient.allergies = allergies;
      patient.medications = medications;
      patient.preExistingConditions = preExistingConditions;
      patient.pastSurgeries = pastSurgeries;
      patient.familyMedicalHistory = familyMedicalHistory;
      patient.notes = notes;
      patient.testResults = testResults;
      patient.documents = documents;
  
      await patient.save();
  
      res.json({
        message: 'Patient information added successfully',
        patient: patient
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add patient information' });
    }
  };