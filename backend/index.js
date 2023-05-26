
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json())
app.use(cors());

const authRouter = require("./routes/auth.routes")
app.use('/auth', authRouter)


app.listen(process.env.PORT, (err) => {
    if (err) console.error(err)
    console.log(`Worker ${process.pid} is running on port `, process.env.PORT);
    require("./configs/db.config")
  });
