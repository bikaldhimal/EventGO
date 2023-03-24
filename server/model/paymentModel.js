// create mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var PaymentSchema = new Schema(
  {
    idx: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    productIdentity: {
      type: Date,
      required: true,
    },
    productName: {
      type: String,
    },
    token: {
      type: String,
    },
    widgetId: {
      type: String,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    eventTitle: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
