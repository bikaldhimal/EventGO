var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TodoSchema = new Schema(
  {
    description: {
      type: "String",
      minlength: [4, "todo must be at least 4 characters long"],
      maxlength: [255, "title must be at least 4 to 100 characters long"],
    },
    status: {
      type: String,
      enum: ["incomplete", "complete"],
      default: "incomplete",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
