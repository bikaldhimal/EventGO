const Feedback = require("./../model/feedbackModel");

// add feedback
exports.addFeedback = async (req, res) => {
  try {
    const { title, description, role, userId } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Title is required",
        status: 404,
      });
    }
    if (!description) {
      return res.status(400).json({
        error: "Description is required",
        status: 404,
      });
    }
    if (!role) {
      return res.status(400).json({
        error: "Role is required",
        status: 404,
      });
    }
    if (!userId) {
      return res.status(400).json({
        error: "UserId is required",
        status: 404,
      });
    }
    console.log(req.file);
    let image = req.file;
    const imageUrl = "http://localhost:5051/";

    const newFeedback = new Feedback({
      image: imageUrl + req.file.filename,
      title,
      description,
      role,
      userId,
    });

    await newFeedback.save();
    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Get all feedbacks
exports.getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.log(error.message);
  }
};
