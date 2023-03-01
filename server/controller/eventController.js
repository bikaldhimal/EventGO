const Event = require("./../model/eventModel");

// add event
exports.addEvent = async (req, res) => {
  try {
    const {
      title,
      venue,
      category,
      date,
      target,
      fee,
      phonenumber,
      image,
      email,
      description,
    } = req.body;
    // checking for empty fields
    if (!title) {
      return res.status(400).json({
        error: "Title is required",
        status: 404,
      });
    }
    if (!venue) {
      return res.status(400).json({
        error: "Venue is required",
        status: 404,
      });
    }
    if (!category) {
      return res.status(400).json({
        error: "Category is required",
        status: 404,
      });
    }
    if (!date) {
      return res.status(400).json({
        error: "Date is required",
        status: 404,
      });
    }
    if (!image) {
      return res.status(400).json({
        error: "Image is required",
        status: 404,
      });
    }
    if (!email) {
      return res.status(400).json({
        error: "Email is required",
        status: 404,
      });
    }
    if (!description) {
      return res.status(400).json({
        error: "Description is required",
        status: 404,
      });
    }
    // checking if event already exists in database
    const event = await Event.findOne({
      title,
      venue,
      image,
      email,
      description,
    });
    if (event) {
      return res.status(400).json({
        error: "Event already exists",
        status: 409,
      });
    }
    // creating a new event
    const newEvent = new Event({
      title,
      venue,
      category,
      target,
      fee,
      phonenumber,
      image,
      email,
      description,
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};

// get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }

  // update event
  exports.updateEvent = async (req, res) => {
    try {
      const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(event);
    } catch (err) {
      res.status(500).send(err);
      error: err.message;
    }
  };

  // delete event
  exports.deleteEvent = async (req, res) => {
    try {
      const event = await Event.findByIdAndDelete(req.params.id);
      res.status(200).json(event);
    } catch (err) {
      res.status(500).send(err);
    }
  };
};
