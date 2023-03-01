const express = require("express");
const router = express.Router();

const eventController = require("./../controller/eventController");
const verifyToken = require("./../middleware/verifyToken");

router.post("/add", verifyToken, eventController.addEvent);
router.get("/show", verifyToken, eventController.getAllEvents);
// router.post("/update", verifyToken, eventController.updateEvent);
// router.post("/delete", verifyToken, eventController.deleteEvent);

module.exports = router;
