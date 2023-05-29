const { Router } = require("express");
const router = Router();

const { addPatientInformation } = require("../controllers/patient.controllers")

router.post("/:id/addPatientInformation", addPatientInformation);


module.exports = router;