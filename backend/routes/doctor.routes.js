const { Router } = require("express");
const router = Router();

const { getPatients, getPatientProfile, addDoctorNote, sendEmail } = require("../controllers/doctor.controller")

router.get("/getPatients", getPatients);
router.get("/:id/getPatientProfile", getPatientProfile);
router.post("/:id/addDoctorNote", addDoctorNote);
router.post("/:email/sendEmail", sendEmail);


module.exports = router;