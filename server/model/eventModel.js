// create mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var EventSchema = new Schema({
  title: {
    type: String,
    minlength: [4, "name must be at least 4 characters long"],
    maxlength: 100,
    required: true,
  },
  venue: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  },
  date: {
    type: Date,
    required: true,
  },
  contact: {
    type: String,
    minlength: 10,
  },
  email: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 255,
  },
});

module.exports = mongoose.model("User", EventSchema);
