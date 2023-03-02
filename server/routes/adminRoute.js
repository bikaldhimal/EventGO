const express = require("express");
const router = express.Router();

var adminController = require("./../controller/adminController");

// const verifyToken = require("../middleware/verifyToken");
// const isAdmin = require("../middleware/isAdmin");
// const isLoggedIn = require("../middleware/isLoggedIn");

// router.post("/signup", adminController.signup);
router.post("/login", adminController.login);
router.get("/users", adminController.getUser);

module.exports = router;
