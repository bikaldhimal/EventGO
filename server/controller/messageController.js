const { server_url } = require("../config/config");
const Message = require("../model/messageModel");

// Create and Save a new Message, use promises
exports.create = (req, res) => {
  // files
  const files = req.files?.map((file) => `${server_url}${file.filename}`);
  // Create a Message
  const message = new Message({
    message: req.body.message,
    sender: req.user.id,
    receiver: req.body.receiver,
    files,
  });
  //  Save Message in the database
  message
    .save()
    .then((data) => {
      if (!data)
        return res
          .status(200)
          .json({ message: "message not sent", status: 400 });
      res.status(200).json({ message: "message sent", status: 201 });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something went wrong",
        status: 500,
      });
    });
};
// get message based on sender and receiver
// sender can be obtained from req.user.id and receiver from params
exports.getMessages = (req, res) => {
  Message.find({
    $or: [
      { sender: req.user.id, receiver: req.params.receiver },
      { sender: req.params.receiver, receiver: req.user.id },
    ],
  })
    .populate("sender", "name")
    .populate("receiver", "name")
    .then((data) => {
      if (!data)
        return res
          .status(200)
          .json({ message: "no messages found", status: 400 });
      res
        .status(200)
        .json({ message: "messages found", status: 200, messages: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "something went wrong",
        status: 500,
      });
    });
};
