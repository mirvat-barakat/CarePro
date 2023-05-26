const User = require("../Models/userModel");
const bcrypt = require("bcrypt");

exports.getPatients = async (req, res) => {
	const patients = await User.find({ role: 'patient' });
	res.json(patients);
};

const Patient = require('./models/Patient');

exports.addDoctorNote = async (req, res) => {
  const { user_id } = req.params;
  const { medications, note, message } = req.body;

  try {
    const patient = await Patient.findOne({ user_id });

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const doctorNote = {
      date: new Date(),
      medications: medications || [],
      note: note || '',
      message: message || ''
    };

    patient.doctorNotes.push(doctorNote);
    await patient.save();

    res.json({
         message: 'Doctor note added successfully',
         patient: patient
     });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add doctor note' });
  }
};