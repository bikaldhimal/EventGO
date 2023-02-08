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
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: Number,
    // 0 = eventmanager, 1 = Artist, 2 = general user, 3 = admin
    enum: [0, 1, 2, 3],
    default: 2,
    require: [true, "role is required"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  adminCount: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
