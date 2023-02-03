const express = require("express");
const router = express.Router();
const linksController = require("../Contrillers/links.controller");
// common
router
  .route("/common")
  .get(linksController.getLinksCommon)
  .post(linksController.createLinksCommon);
router
  .route("/common/:name/:id")
  .patch(linksController.patchLinksCommonById)
  .delete(linksController.deleteLinksCommon);

/* // social
router
  .route("/social")
  .get(linksController.getLinksCommon)
  .post(linksController.createLinksCommon);
router
  .route("/social/:id")
  .patch(linksController.patchLinksCommonById)
  .delete(linksController.deleteLinksCommon);

// gallary */
module.exports = router;
