// create mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var InviteRequestSchema = new Schema({
  managerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  artistId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  type: {
    type: String,
    enum: ["invite", "request"],
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("InviteRequest", InviteRequestSchema);
