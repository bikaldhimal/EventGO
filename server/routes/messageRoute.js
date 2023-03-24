const router = require("express").Router();
const messageController = require("../controller/messageController");
const upload = require("../middleware/multerConfig");
const checkAuth = require("../middleware/check-auth-header.middleware");

router.post(
  "/send",
  checkAuth.checkAuthHeader,
  upload.array("files"),
  messageController.create
);
router.get(
  "/receive/:receiver",
  checkAuth.checkAuthHeader,
  messageController.getMessages
);
module.exports = router;
