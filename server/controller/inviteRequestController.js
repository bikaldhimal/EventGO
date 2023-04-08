const InviteRequest = require("./../model/inviteRequestModel");

// request to participate in an even by a user
exports.requestInvite = async (req, res) => {
  try {
    const { managerId, artistId, eventId } = req.body;
    if (!managerId) {
      return res.status(400).json({
        error: "requestedBy is required",
        status: 404,
      });
    }
    if (!artistId) {
      return res.status(400).json({
        error: "requestedBy is required",
        status: 404,
      });
    }
    if (!eventId) {
      return res.status(400).json({
        error: "eventId is required",
        status: 404,
      });
    }
    const inviteRequest = await InviteRequest.findOne({
      managerId,
      artistId,
      eventId,
    });
    if (inviteRequest) {
      return res.status(400).json({
        error: "Invite request already exists",
        status: 409,
      });
    }
    const newInviteRequest = new InviteRequest({
      managerId,
      artistId,
      eventId,
      type: "request",
    });
    await newInviteRequest.save();
    res.json({
      status: 200,
      newInviteRequest,
    });
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};

// get requests sent by a user to participate in an event
exports.getRequestsSent = async (req, res) => {
  try {
    const artistId = req.params.id;
    const inviteRequests = await InviteRequest.find({
      artistId: artistId,
      type: "request",
    })
      .populate({
        path: "eventId",
        select: "title venue",
      })
      .populate({ path: "managerId", select: "name" }) // Populate managerId instead of userId
      .populate({ path: "artistId", select: "name" })
      .select("date status");

    const formattedRequests = inviteRequests.map((request) => {
      return {
        eventTitle: request.eventId.title,
        eventVenue: request.eventId.venue,
        managerName: request.managerId.name, // Get the manager's name from managerId
        artistName: request.artistId.name, // Get the artist's name from artistId
        requestDate: request.date,
        status: request.status,
      };
    });

    res.status(200).json(formattedRequests);
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};

// get requests sent by artists to participate in events managed by a specific manager
exports.getRequestsByManager = async (req, res) => {
  try {
    const managerId = req.params.managerId;

    const inviteRequests = await InviteRequest.find({
      type: "request",
    })
      .populate({
        path: "eventId",
        select: "_id title venue userId",
        match: { userId: managerId }, // Filter events that belong to the specific manager
      })
      .populate({ path: "managerId", select: "name" })
      .populate({ path: "artistId", select: "name" })
      .select("date status");

    const formattedRequests = inviteRequests
      .filter((request) => request.eventId) // Filter out requests with null eventId after population
      .map((request) => {
        return {
          _id: request._id,
          eventTitle: request.eventId.title,
          eventVenue: request.eventId.venue,
          managerName: request.managerId.name,
          artistName: request.artistId.name,
          requestDate: request.date,
          status: request.status,
        };
      });

    res.status(200).json(formattedRequests);
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};

// invite artists to an event by an event organizer
exports.inviteArtists = async (req, res) => {
  try {
    const { artistId, managerId, eventId } = req.body;

    const inviteRequest = await InviteRequest.findOne({
      artistId,
      managerId,
      eventId,
    });
    if (inviteRequest) {
      return res.status(400).json({
        error: "Invite request already exists",
        status: 409,
      });
    }
    const newInviteRequest = new InviteRequest({
      artistId,
      managerId,
      eventId,
      type: "invite",
    });
    await newInviteRequest.save();
    res.json({
      status: 200,
      newInviteRequest,
    });
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};

// get invites sent by an event organizer to an artist
exports.getInvitesSent = async (req, res) => {
  try {
    const managerId = req.params.id;
    const inviteRequests = await InviteRequest.find({
      managerId: managerId,
      type: "invite",
    }).populate({ path: "eventId", select: "title" });

    // Mapping the inviteRequests to a new array containing the previous data along with the event title
    const responseData = inviteRequests.map((inviteRequest) => ({
      ...inviteRequest.toObject(),
      eventTitle: inviteRequest.eventId.title,
    }));

    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};

// get invites sent by an event organizer to an artist throught the artist's profile
exports.getInviteByArtist = async (req, res) => {
  try {
    const artistId = req.params.id;
    console.log("Artist ID:", artistId);

    const inviteRequests = await InviteRequest.find({
      artistId: "641ae76034fb75623f67c292",
      type: "invite",
    }).populate({ path: "eventId", select: "title venue" });

    console.log("Invite requests:", inviteRequests);

    // Mapping the inviteRequests to a new array containing the previous data along with the event title
    const responseData = inviteRequests.map((inviteRequest) => ({
      ...inviteRequest.toObject(),
      eventTitle: inviteRequest.eventId.title,
      venue: inviteRequest.eventId.venue,
    }));

    console.log("Response data:", responseData);

    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};

// update request sent by an artist to participate in an event
exports.updateRequest = async (req, res) => {
  try {
    const { status } = req.body;
    const inviteRequestId = req.params.id;
    const inviteRequest = await InviteRequest.findByIdAndUpdate(
      inviteRequestId,
      { status },
      { new: true }
    );
    res.status(200).json(inviteRequest);
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};

// update invite sent by an event organizer to an artist
exports.updateInvite = async (req, res) => {
  try {
    const { status } = req.body;
    const inviteRequestId = req.params.id;
    const inviteRequest = await InviteRequest.findByIdAndUpdate(
      inviteRequestId,
      { status },
      { new: true }
    );
    res.status(200).json(inviteRequest);
  } catch (err) {
    res.status(500).send(err);
    error: err.message;
  }
};
