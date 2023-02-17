// Create express app
var express = require("express");
var mongoose = require("mongoose");
const session = require("express-session");
const multer = require("multer");
const cors = require("cors");
const passport = require("passport");
const isLoggedIn = require("./middleware/isLoggedIn");
require("./googleAuth");
var app = express();

const verifyToken = require("./middleware/verifyToken");

// Fog Google Authentication
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/userRoute");
app.use("/api/user", userRoutes);

const adminRoutes = require("./routes/adminRoute");
app.use("/api/admin", adminRoutes);

// const eventRoute = require("./routes/eventRoute");
// app.use("/api/events", eventRoute);

// File Upload (Image Upload)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/images/profiles");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB
});

app.post("/api/upload", verifyToken, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file was uploaded.");
  }
  res.status(200).send(req.file.path);
});
// File Upload (Image Upload) End

// Sign in with google
app.get("/api/google", (req, res) => {
  res.send(`<a href="/auth/google">Sign In with Google</a>`);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/protected",
    failureRedirect: "/auth/failure",
  })
);

app.get("/auth/failure", (req, res) => {
  res.send("Something went wrong!");
});

app.get("/api/protected", isLoggedIn, (req, res) => {
  res.send("Hello");
});
// Sign in with Google End

mongoose.set("strictQuery", true);
// MondoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to EventGO Database");
  app.listen(process.env.PORT || 8080, function () {
    console.log(
      `Express server listening on port ${process.env.PORT}`,
      this.address.MONGODB_URI || "localhost",
      app.settings.env
    );
    console.log(process.env.PORT);
  });
});
