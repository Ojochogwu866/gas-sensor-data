const express = require("express");
const router = express.Router();

const {
  creategasData,
  /*deleteGasData,
  deleteDevice,
  updateGasData,*/
  getAllData,
} = require("../controllers/data");

router.route("/create-data").post(creategasData);
router.route("/data/:deviceId").get(getAllData);
/*router.route("/data/:deviceId/:dataId").put(updateGasData);
router.route("/data/:deviceId/:dataId").delete(deleteGasData);
router.route("/devices/:deviceId").delete(deleteDevice);
*/
module.exports = router;
