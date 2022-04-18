const express = require("express");
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/user");
const connectDB = require("./config/configdB");
connectDB();
var cors = require("cors");
app.use(cors({
  origin:process.env.FRONT_END_URI,
  optionsSuccessStatus:200

}))

app.use(bodyParser.json());
app.use("/", userRoutes);






app.listen(process.env.PORT, () =>
  console.log(`server is on:${process.env.PORT}`)
);
