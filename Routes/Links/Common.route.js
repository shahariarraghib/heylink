const express = require("express");
const router = express.Router();
const commonController = require("../../Controller/LinksController/Common.controller.js");

router
  .route("/:name")
  .post(commonController.createCommon)
  .get(commonController.getCommon);
router
  .route("/:name/:id")
  .patch(commonController.patchCommonById)
  .delete(commonController.deleteCommon)
  .get(commonController.getCommonByID);
module.exports = router;
