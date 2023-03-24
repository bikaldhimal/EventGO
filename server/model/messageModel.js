const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: false,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "sender is not specified"],
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "receiver is not specified"],
  },
  files: [
    {
      type: String,
      required: false,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Message", messageSchema);
