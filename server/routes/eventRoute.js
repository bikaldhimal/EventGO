const express = require("express");
const router = express.Router();
const multer = require("multer");

const app = express();

const eventController = require("./../controller/eventController");
const verifyToken = require("./../middleware/verifyToken");

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
//File Uploading Ends

router.post("/add", filehandler, eventController.addEvent);
router.get("/show", eventController.getAllEvents);
// router.post("/update", verifyToken, eventController.updateEvent);
// router.post("/delete", verifyToken, eventController.deleteEvent);

module.exports = router;
