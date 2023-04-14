const express = require("express");
const router = express.Router();

const {
  deletegasData,
  getgasData,
  getgasDataById,
  creategasData,
  updategasData,
} = require("../controllers/data");

router.route("/gas-data").post(creategasData).get(getgasData);
router
  .route("/:id")
  .get(getgasDataById)
  .delete(deletegasData)
  .put(updategasData);

module.exports = router;
