const express = require("express");
const router = express.Router();

var paymentController = require("./../controller/paymentController");

router.post("/add", paymentController.addPaymentDetails);
router.get("/get", paymentController.getPaymentDetails);

module.exports = router;
