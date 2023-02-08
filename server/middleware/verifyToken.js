const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;

// Verify the token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, secret, (err, data) => {
      if (err) {
        return res.sendStatus(401);
      }
      req.token = data;
      next();
    });
  } else {
    return res.sendStatus(401);
  }
}

module.exports = verifyToken;
