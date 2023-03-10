const verifyToken = require("./../middleware/verifyToken");
const User = require("./../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// sign Up controller
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
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
    if (!role)
      return res.status(400).json({
        error: "role is required",
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
    // handling errors (if any)
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(200).json({
        error: "User not found",
        status: 404,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).json({
        error: "Invalid password",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // set isActive to true
    user.isActive = true;
    await user.save();
    res.status(200).json({
      token,
      isActive: true,
      name: user.name,
      address: user.address,
      description: user.description,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id, name, address, description, role, password } = req.body;
    // const image = req.file.filename;

    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        address,
        description,
        role,
        password,
        // image,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      status: 200,
      success: "User Updated Successfully",
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Upload Image Controller
exports.uploadProfile = [
  verifyToken,
  async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(400).json({
          error: "User not found",
          status: 404,
        });
      }
      const file = req.file;
      if (!file) {
        return res.status(400).json({
          error: "File not found",
          status: 404,
        });
      }
      const path = `/uploads/images/profile/${user._id}/${file.filename}`;
      file.mv(path, async (err) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
            status: 500,
          });
        }
        res.status(200).json({
          message: "Image uploaded successfully",
          status: 201,
        });
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
        status: 500,
      });
    }
  },
];

// Update User
exports.updateUser = [
  verifyToken,
  async (req, res) => {
    try {
      const id = req.params.id;
      const { name, address, description } = req.body;
      console.log(req.file);
      let image = req.file.filename;
      console.log(image);
      console.log(req.body);
      const user = await User.findByIdAndUpdate(
        id,
        { name, address, description },
        { new: true }
      );

      if (!user) {
        return res.status(404).send("User not found");
      }

      const imageUrl = "http://localhost:5051/";

      res.status(200).json(user);
    } catch (err) {
      console.log(err.message),
        res.status(500).json({
          error: err.message,
        });
    }
  },
];

// Delete User
exports.deleteUser = [
  verifyToken,
  async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.user.id);
      res.status(200).json(user);
      console.log(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    }
  },
];

// Logout
exports.logout = async (req, res) => {
  try {
    const { token } = req.headers;
    const user = await User.findOne({
      token,
    });
    user.isActive = false;
    await user.save();
    res.clearCookie("token");
    res.status(200).json({
      message: "Logged out",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
