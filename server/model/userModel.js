// create mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
  name: {
    type: String,
    minlength: [2, "name must be at least 2 characters long"],
    maxlength: [50, "name must be at least 2-50 characters long"],
    required: true,
  },
  address: {
    type: String,
    minlength: [5, "address must be at least 5 characters long"],
    default: "address: xxx - xx, xxxxx, xxxxx",
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please fill a valid email address",
    // ],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    // maxlength: 20,
    // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/],
  },
  description: {
    type: String,
    minlength: 10,
    default: "Description about to be displayed, about yourself",
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "actor", "manager", "admin"],
    require: [true, "role is required"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
