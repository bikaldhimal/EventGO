// create mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var EventSchema = new Schema({
  title: {
    type: String,
    minlength: [3, "title must be at least 3 characters long"],
    maxlength: [100, "title must be at least 3 to 100 characters long"],
    required: true,
  },
  venue: {
    type: String,
    required: true,
    minlength: [3, "venue must be at least 3 characters long"],
    maxlength: [100, "venue must be at least 3 to 100 characters long"],
  },
  category: {
    type: String,
    required: true,
    minlength: [3, "category must be at least 3 characters long"],
    maxlength: [50, "category must be at least 3 to 50 characters long"],
  },
  date: {
    type: Date,
    required: true,
  },
  target: {
    type: String,
    minlength: [2, "target must be at least 2 characters long"],
    maxlength: [20, "target must be at least 2 to 20  characters long"],
  },
  fee: {
    type: Number,
    minlength: [2, "fee must be at least 2 characters long"],
    maxlength: [5, "fee must be at least 5 characters long"],
  },
  phonenumber: {
    type: String,
    minlength: [10, "phonenumber must be at least 10 characters long"],
    maxlength: [14, "phonenumber must be at least 10 to 14 characters long"],
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: [10, "description must be at least 10 characters long"],
    maxlength: [255, "category must be at least 10 to 255 characters long"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Event", EventSchema);
