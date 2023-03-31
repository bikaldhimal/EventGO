require("dotenv").config();

const jwt = require("jsonwebtoken");
module.exports.checkAuthHeader = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res
          .status(200)
          .json({ message: "unauthorized, please login", status: 401 });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(400).json({ message: "no token provided", status: 400 });
  }
};
