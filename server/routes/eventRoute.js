var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const secret = "mysecret";

var eventController = require("./../controller/eventController");

// verify token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, secret, (err, data) => {
      if (err) {
        return res.sendStatus(401);
      }
      req.token = data;
      next();
    });
  } else {
    return res.sendStatus(401);
  }
}

router.get("/events", verifyToken, eventController.getAllEvents);
router.post("/events/add", verifyToken, eventController.addEvent);
router.post("/events/update/:id", verifyToken, eventController.updateEvent);
router.post("/events/delete/:id", verifyToken, eventController.deleteEvent);

module.exports = router;
