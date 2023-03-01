// create mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
  name: {
    type: String,
    minlength: [4, "name must be at least 4 characters long"],
    maxlength: 20,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
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
