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
  category: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  // date: {
  //   type: Date,
  //   required: true,
  // },
  target: {
    type: String,
    minlength: 10,
    maxlength: 20,
  },
  fee: {
    type: Number,
  },
  phonenumber: {
    type: Number,
    minlength: 10,
    maxlength: 14,
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
    minlength: 10,
    maxlength: 255,
  },
});

module.exports = mongoose.model("Event", EventSchema);
