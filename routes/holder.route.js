const express = require("express");
const holderController = require("../controller/holderController");

const router = express.Router();

router
  .post("/", holderController.createHolder)
  .get("/", holderController.getSubtree);

router.get("/:id/top");

router.get("/resetDB", holderController.resetDB);

module.exports = router;

