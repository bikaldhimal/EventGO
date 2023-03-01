const jwt = require("jsonwebtoken");
const User = require("./../model/userModel");
require("dotenv").config();
const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    if (user.role !== "admin") {
      return res.status(401).send({ error: "Access denied. Admin only." });
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};
