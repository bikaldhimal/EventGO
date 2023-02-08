const verifyToken = require("./../middleware/verifyToken");
const User = require("./../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// sign Up
exports.signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    // checking for emplty fields
    if (!name)
      return res.status(400).json({
        error: "name is required",
        status: 404,
      });
    if (!email)
      return res.status(400).json({
        error: "email is required",
        status: 404,
      });
    if (!password)
      return res.status(400).json({
        error: "password is required",
        status: 404,
      });
    if (!confirmPassword)
      return res.status(400).json({
        error: "confirm_password is required",
        status: 404,
      });

    // checking confirm_password matches password
    if (confirmPassword !== password)
      return res.status(400).json({
        error: "confirm_password should be same as password",
        status: 404,
      });

    // checking if the user alresdy exists in database
    const user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(400).json({
        error: "User already exists with that email",
        status: 409,
      });
    }

    // role for admin
    const role = 3;
    // creating a new user/signup a user
    const newUser = new User({
      name,
      email,
      password,
      role,
    });

    // hashing the password and saving it to database
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    res.status(201).json({
      message: "user created successfully",
      status: 201,
    });
    incrementAdminCount();
    // handling errors (if any)
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Get all users
exports.getUser = [
  verifyToken,
  async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  },
];

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await User.findOne({
      email,
    });
    if (!admin) {
      return res.status(400).json({
        error: "User not found",
        status: 404,
      });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({
        error: "Invalid password",
      });
    }
    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // set isActive to true
    admin.isActive = true;
    await admin.save();
    res.status(200).json({
      token,
      isActive: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
