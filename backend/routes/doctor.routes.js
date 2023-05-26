const { Router } = require("express");
const router = Router();

const { getPatients, getPatientProfile, addDoctorNote } = require("../controllers/doctor.controller")

router.get("/getPatients", getPatients);
router.get("/getPatientProfile", getPatientProfile);
router.post("/addDoctorNote", addDoctorNote);


module.exports = router;