const { Router } = require("express");
const router = Router();

const { addPatientInformation } = require("../controllers/patient.controllers")

router.post("/addPatientInformation", addPatientInformation);


module.exports = router;