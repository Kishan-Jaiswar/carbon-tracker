const express = require("express");
const {
  calculateCarbonFootprint,
} = require("../controllers/carbonfootPrintEmission");

const router = express.Router();

router.post("/calculate", calculateCarbonFootprint);

module.exports = router;
