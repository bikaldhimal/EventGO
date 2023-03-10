const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

const userController = require("./../controller/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/upload/profile", userController.uploadProfile);
router.patch("/update", userController.updateProfile);
router.get("/logout", userController.logout);

module.exports = router;
