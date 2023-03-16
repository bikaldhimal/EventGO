const chatModel = require("./../model/chatModel");
const companyModel = require("../../model/companyModel");

// Create a new message
exports.createMessage = async (req, res) => {
  const { from, to, message } = req.body;
  console.log("dfdsf", req.body);
  const chat = await chatModel.create({
    message: message,
    chatUsers: [from, to],
    sender: from,
    receiver: to,
  });
  console.log(chat);
  res.json({
    status: 200,
    message: "message sent successfully",
    chat,
  });
};

// Get previous conversation
exports.getMessages = async (req, res) => {
  const from = req.params.userId1;
  const to = req.params.userId2;
  console.log(from, to);

  const company = await companyModel.findById(to);
  console.log(company);

  const newMessage = await chatModel
    .find({
      chatUsers: { $all: [from, to] },
    })
    .sort({ updatedAt: 1 });
  console.log(newMessage);

  const allMessages = newMessage.map((msg) => {
    return {
      myself: msg.sender.toString() === from,
      message: msg.message,
    };
  });
  res.json({
    status: 200,
    message: "messages fetched successfully",
    allMessages,
    company,
  });
};
