const User = require("../Models/userModel");
const bcrypt = require("bcrypt");

const Patient = require('../Models/patientsModel');


exports.getPatients = async (req, res) => {
	const patients = await User.find({ role: 'patient' });
	res.json(patients);
};

exports.getPatientProfile = async (req, res) => {
    const { id: user_id  } = req.params;
  
    try {
      const patient = await Patient.findOne({ user_id });
  
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
  

exports.addDoctorNote = async (req, res) => {
  const { user_id } = req.params;
  const { medications, note, message } = req.body;

  try {
    const patient = await Patient.findById( user_id );

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
         status: "success",
         message: 'Doctor note added successfully',
         patient: patient
     });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add doctor note' });
  }
};

const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { recipientEmail } = req.params;

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'mirvatbarakat1@gmail.com',
    pass: '',
  },
});

const mailOptions = {
  from: 'mirvatbarakat1@gmail.com',
  to: recipientEmail,
  subject: 'Notification: Profile Update',
  text: 'Dear patient, your profile has been updated. Please log in to view the changes.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
};