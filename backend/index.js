
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json())
app.use(cors());


const { authMiddleware } = require("./middlewares/auth.middleware");
const { patientMiddleware } = require("./middlewares/patient.middleware");
const { doctorMiddleware } = require("./middlewares/doctor.middleware");

const authRouter = require("./routes/auth.routes");
app.use('/auth', authRouter)

const patientRouter = require("./routes/patient.routes");
app.use('/patient', patientRouter)

const doctorRouter = require("./routes/doctor.routes");
app.use('/doctor', doctorMiddleware, doctorRouter)


app.listen(process.env.PORT, (err) => {
    if (err) console.error(err)
    console.log(`Server is running on port `, process.env.PORT);
    require("./configs/db.config")
  });
