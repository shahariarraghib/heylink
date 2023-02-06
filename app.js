const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route
const linksRoute = require("./Routes/Links/Common.route");

app.use("/app/v1/links", linksRoute);


app.get("/", (req, res) => {
  res.send("HeyLink surver is connected!!");
});

module.exports = app;
