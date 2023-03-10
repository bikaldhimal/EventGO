// Create express app
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const isLoggedIn = require("./middleware/isLoggedIn");
require("dotenv").config();
const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5173",
  credentials: true,
};

app.use(cors(corsOptions));

var userProfile;
console.log(process.env.clientID);
// For Google Authentication
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + "/uploads/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Caling the routes
const userRoutes = require("./routes/userRoute");
const adminRoutes = require("./routes/adminRoute");
const eventRoute = require("./routes/eventRoute");
const userModel = require("./model/userModel");

// Initializing the routes
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoute);

// Signin with Google
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

/*  Google AUTH  */

var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "http://localhost:5051/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://127.0.0.1:5173/login",
  }),
  async function (req, res) {
    const findUserByEmail = await userModel.findOne({
      email: userProfile.emails[0].value,
    });
    let token;
    if (findUserByEmail) {
      token = findUserByEmail.id;
    } else {
      const user = await userModel.create({
        name: userProfile.displayName,
        email: userProfile.emails[0].value,
        password: userProfile.id,
        isActive: true,
      });
      token = user.id;
    }
    // res.header("Access-Control-Allow-Credentials", true);

    // Successful authentication, redirect success.
    res.redirect("http://127.0.0.1:5173/google/" + token);
  }
);
// Signin with Google End

// MondoDB Connection
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to EventGO Database");
  app.listen(5051, function () {
    console.log(
      `Express server listening on port ${process.env.PORT}`,
      this.address.MONGODB_URI || "localhost",
      app.settings.env
    );
    console.log(process.env.PORT);
  });
});
