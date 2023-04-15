const express = require("express");
const router = express.Router();
const multer = require("multer");

const app = express();

const eventController = require("./../controller/eventController");
const verifyToken = require("./../middleware/verifyToken");
const inviteRequest = require("../controller/inviteRequestController");

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
router.get("", eventController.getAllEvents);
router.get("/:id", eventController.getSpecificEvents);
// router.post("/update", verifyToken, eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);

router.post("/request", inviteRequest.requestInvite);
router.get("/request/:id", inviteRequest.getRequestsSent);
router.get("/request/manager/:managerId", inviteRequest.getRequestsByManager);

router.post("/invite-artist", inviteRequest.inviteArtists); // Invite artist to event by the manager
router.get("/invite-artist/manager/:id", inviteRequest.getInvitesSent); // Get invites sent by the manager
router.get("/invite-artist/artist/:id", inviteRequest.getInviteByArtist); // Get invites sent to the artist

// Update request and Invite
router.post("/update-request/:id", inviteRequest.updateRequest);
router.post("/update-invite/:id", inviteRequest.updateInvite);

module.exports = router;
