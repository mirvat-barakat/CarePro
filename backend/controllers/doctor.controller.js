const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
require('dotenv').config();
const nodemailer = require('nodemailer');

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
  const { user_id, recipientEmail } = req.params;
  const { medications, note, message } = req.body;

  try {
    const patient = await Patient.findOne( user_id );

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    patient.d_medications = medications;
    patient.d_note = note,
    patient.d_comment = message,
    await patient.save();

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    
    const mailOptions = {
      from: process.env.EMAIL,
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

    res.json({
         status: "success",
         message: 'Doctor note added successfully',
         patient: patient
     });
     
  } catch (error) {
    res.status(500).json({ error: 'Failed to add doctor note' });
  }
};


exports.sendEmail = async (req, res) => {
  const { recipientEmail } = req.params;

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: 'mirvatbarakat1@outlook.com',
    pass: '@mirvatmeev13',
  },
});

const mailOptions = {
  from: 'mirvatbarakat1@outlook.com',
  to: 'mirvatbarakat1@gmail.com',
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