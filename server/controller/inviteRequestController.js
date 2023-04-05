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
    console.log("managerID", managerId); // Get the managerId from the request parameters

    const inviteRequests = await InviteRequest.find({
      type: "request",
    })
      .populate({
        path: "eventId",
        select: "title venue userId",
        match: { userId: managerId }, // Filter events that belong to the specific manager
      })
      .populate({ path: "managerId", select: "name" })
      .populate({ path: "artistId", select: "name" })
      .select("date status");

    const formattedRequests = inviteRequests
      .filter((request) => request.eventId) // Filter out requests with null eventId after population
      .map((request) => {
        return {
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
    const { managerId, eventId } = req.body;
    if (!requestedBy) {
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
      requestedBy,
      eventId,
    });
    if (inviteRequest) {
      return res.status(400).json({
        error: "Invite request already exists",
        status: 409,
      });
    }
    const newInviteRequest = new InviteRequest({
      invitedBy,
      requestedBy,
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
    });
    res.status(200).json(inviteRequests);
  } catch (err) {}
};
