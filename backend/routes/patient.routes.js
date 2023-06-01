const { Router } = require("express");
const router = Router();

const { addPatientInformation } = require("../controllers/patient.controllers");
const { getDoctorReport } = require("../controllers/patient.controllers");


router.post("/:id/addPatientInformation", addPatientInformation);
router.get("/:id/getDoctorReport", getDoctorReport);

module.exports = router;