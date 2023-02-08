var express = require("express");
var router = express.Router();

var userController = require("./../controller/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/upload/profile", userController.uploadProfile);
router.post("/update/:id", userController.updateUser);
router.get("/logout", userController.logout);

module.exports = router;
