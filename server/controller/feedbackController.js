const Feedback = require("./../model/feedbackModel");

exports.createFeedback = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { title, description } = req.body;

    let image = req.file.filename;

    const imageUrl = "http://localhost:5051/";

    const feedback = new Feedback({
      title,
      description,
      image: imageUrl + image,
      userId,
    });

    await feedback.save();

    res.status(201).json({
      message: "Feedback created successfully!",
      feedback,
    });
  } catch (err) {
    next(err);
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("userId", "name role");
    if (feedbacks.length === 0) {
      return res.status(404).json({
        message: "No feedbacks found",
      });
    }
    res.status(200).json({
      message: "Feedbacks fetched successfully!",
      feedbacks,
    });
  } catch (err) {
    console.log(err.message);
  }
};
