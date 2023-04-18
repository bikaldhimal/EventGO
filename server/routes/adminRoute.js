const express = require("express");
const router = express.Router();

var adminController = require("./../controller/adminController");

const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");
// const isLoggedIn = require("../middleware/isLoggedIn");

// router.post("/signup", adminController.signup);
router.post("/login", adminController.login);
router.get("/users", adminController.getUser);
router.delete("/users/:id", adminController.deleteUser);
router.get("/payments", adminController.getAllPayments);
router.put("/suspend/:userId", adminController.suspendUser);

module.exports = router;
