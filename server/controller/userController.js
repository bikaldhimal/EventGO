const verifyToken = require("./../middleware/verifyToken");
const User = require("./../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../email/email");
const { createHmac, createHash } = require("crypto");

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

// Update Profile Controller
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

// Update User Controller
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

// Delete User Controller
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

// Logout Controller
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

// Forgot Password Controller
exports.forgotPassword = async (req, res, next) => {
  //check if user emai exists in the database
  const { email } = req.body;
  const user = await User.findOne({ email });

  // createResetToken method is coming from usermodel file
  const otp = await user.createResetToken();

  const secret = process.env.SECRET;
  user.passwordResetToken = createHmac("sha256", secret)
    .update(`${otp}`)
    .digest("hex");
  user.passwordResetTokenExpiresIn = Date.now() + 10 * 60 * 1000;

  await user.save();

  const message = `Hello, ${user.name}, \nDid you Forgot your password ? \nEnter the otp code provided below: \n\n${otp} \nIf you don't forget your password , please ignore this email! \nBest regards, \nEventGO`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset otp (only valids for 10 minutes)",
      message,
    });
    res.status(200).json({
      status: 200,
      user,

      message: "Email sent succesfully",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpiresIn = undefined;
    console.log(err);
    await user.save();

    return res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

// Check OTP Controller
exports.checkOTP = async (req, res, next) => {
  const otp = req.body.otp;
  const hashedToken = createHmac("sha256", process.env.SECRET)
    .update(otp)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpiresIn: { $gt: Date.now() },
  });
  // if token is not valid or expired
  if (!user) {
    return res.json({
      status: 400,
      message: "Invalid token",
    });
  }
  res.json({
    status: 200,
    message: "OTP token has been valid",
  });
};

// Password reset controller
exports.resetPassword = async (req, res, next) => {
  const password = req.body.password;
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    res.json({
      status: 404,
      message: "User does not exist",
    });
  }
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpiresIn = undefined;

  // hashing the password and saving it to database
  const salt = await bcrypt.genSalt(10);
  user.password = bcrypt.hashSync(password, salt);

  await user.save();

  res.json({
    status: 200,
    message: "Reset Successfully",
  });
};
