var express = require("express");
var router = express.Router();

var adminController = require("./../controller/adminController");

const adminAuth = require("../middleware/adminAuth");

router.post("/signup", adminController.signup);
router.post("/login", adminController.login);
router.get("/users", adminAuth, adminController.getUser);

module.exports = router;
