const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");

router.use(bodyParser.json());

const app = express();

// File Uploading with multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

// file filtering
const fileFilter = (req, file, cb) => {
  console.log(req.body);
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let filehandler = app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

const userController = require("./../controller/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/upload/profile", userController.uploadProfile);
router.put("/update/:id", filehandler, userController.updateUser);
router.put("/update-password/:id", filehandler, userController.updatePassword);
router.post("/forgot-password", userController.forgotPassword);
router.post("/check-otp", userController.checkOTP);
router.post("/reset-password", userController.resetPassword);
router.put("/logout/:id", userController.logout);
router.get("/artists", userController.getArtists);
router.get("/users", userController.getUsers);
router.get("/managers", userController.getManagers);

module.exports = router;
