// create mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var FeedbackSchema = new Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    minlength: [3, "title must be at least 3 characters long"],
    maxlength: [100, "title must be at least 3 to 100 characters long"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    minlength: [5, "target must be at least 5 characters long"],
    maxlength: [255, "target must be at least 5 to 255  characters long"],
  },
  role: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
