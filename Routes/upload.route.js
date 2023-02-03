const express = require("express");
const router = express.Router();
const linksController = require("../Contrillers/upload.controller");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

router
  .route("/image")
  .get(linksController.uploadImage)
  .post(linksController.uploadImage);

module.exports = router;
