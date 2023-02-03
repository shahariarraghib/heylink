const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route
const linksRoute = require("./Routes/links.route");
const uploadRoute = require("./Routes/upload.route");

app.use("/app/v1/links", linksRoute);
app.use("/app/v1/upload", uploadRoute);

app.get("/", (req, res) => {
  res.send("HeyLink surver is connected!!");
});

module.exports = app;
