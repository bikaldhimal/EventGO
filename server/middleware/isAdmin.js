function isAdmin(req, res, next) {
  req.user.role != "admin"
    ? res.sendStatus(403).json({ message: "Forbidden" })
    : next();
}

module.exports = isAdmin;
