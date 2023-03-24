const Payment = require("./../model/paymentModel");
const Event = require("./../model/eventModel");

// Add Payment Details
exports.addPaymentDetails = async (req, res) => {
  try {
    const {
      idx,
      amount,
      mobile,
      productIdentity,
      productName,
      token,
      widgetId,
      eventId,
      eventTitle,
      userId,
    } = req.body;

    // checking for emplty fields
    if (!idx)
      return res.status(400).json({
        error: "idx is required",
        status: 404,
      });
    if (!amount)
      return res.status(400).json({
        error: "amount is required",
        status: 404,
      });
    if (!mobile)
      return res.status(400).json({
        error: "mobile is required",
        status: 404,
      });
    if (!productIdentity)
      return res.status(400).json({
        error: "product_identity is required",
        status: 404,
      });
    if (!productName)
      return res.status(400).json({
        error: "product_name is required",
        status: 404,
      });
    if (!token)
      return res.status(400).json({
        error: "token is required",
        status: 404,
      });
    if (!widgetId)
      return res.status(400).json({
        error: "widget_id is required",
        status: 404,
      });
    if (!eventId)
      return res.status(400).json({
        error: "eventId is required",
        status: 404,
      });
    if (!eventTitle)
      return res.status(400).json({
        error: "eventTitle is required",
        status: 404,
      });
    if (!userId)
      return res.status(400).json({
        error: "userId is required",
        status: 404,
      });

    // checking if the same payment alresdy exists in database
    const payment = await Payment.findOne({
      idx,
    });
    if (payment) {
      return res.status(400).json({
        error: "payment already exists with that widget_id",
        status: 409,
      });
    }

    // Creating a new payment
    const newPayment = new Payment({
      idx,
      amount,
      mobile,
      productIdentity,
      productName,
      token,
      widgetId,
      eventId,
      eventTitle,
      userId,
    });

    await newPayment.save();

    res.status(201).json({
      message: "payment added successfully",
      status: 201,
      paymentDetails: newPayment,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

exports.getPaymentDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const paymentDetails = await Payment.find({ userId: userId });
    res.status(200).json(paymentDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err.message });
  }
};
