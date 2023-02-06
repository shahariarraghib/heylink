const express = require("express");
const router = express.Router();
const linksController = require("../Contrillers/links.controller");
const multer = require("multer");
const path = require("path");

//upload folder destination
const UPLOADS_FOLDER = "./uploads";

//process the storage file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLocaleLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExt);
  },
});

//process the uploads file and validate files
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000, //5mb
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "file") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("only .jpg .jpeg .png format is allowed!!"));
      }
    } else {
      cb(new Error("There was an unknown error!"));
    }
  },
});
// common
router
  .route("/common")
  .get(linksController.getLinksCommon)
  .post(upload.single("file"), linksController.createLinksCommon);
router
  .route("/common/:name/:id")
  .patch(linksController.patchLinksCommonById)
  .delete(linksController.deleteLinksCommon)
  .get(linksController.getLinksCommonById);
module.exports = router;
