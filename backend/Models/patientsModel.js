const mongoose = require("mongoose");

const patientDataSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  allergies: {
    type: [String],
    default: [],
  },
  medications: {
    type: [String],
    default: [],
  },
  preExistingConditions: {
    type: [String],
    default: [],
  },
  pastSurgeries: {
    type: [String],
    default: [],
  },
  familyMedicalHistory: {
    type: String,
    default: "",
  },
  notes: {
    type: String,
    default: "",
  },
  testResults: [
    {
      testName: {
        type: String,
      },
      result: {
        type: String,
      },
      date: {
        type: Date,
      },
    },
  ],
  documents: [
    {
      name: {
        type: String,
      },
      fileUrl: {
        type: String,
      },
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  doctorNotes: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      medications: {
        type: [String],
        default: [],
      },
      note: {
        type: String,
        default: "",
      },
      message: {
        type: String,
        default: "",
      },
    },
  ],
});

const Patient = mongoose.model("Patient", patientDataSchema);

module.exports = Patient;